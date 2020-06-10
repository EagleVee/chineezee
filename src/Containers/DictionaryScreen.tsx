import React, { ReactElement, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Switch
} from "react-native";

import styles from "./Styles/DictionaryScreenStyle";
import Container from "../Components/Container";
import i18n from "i18n-js";
import { DictionaryContext } from "../Providers/DictionaryProvider";
import KeyExtractor from "../Common/KeyExtractor";
import traditional from "../Resources/traditional.json";
import simplified from "../Resources/simplified.json";
import { Colors } from "../Themes";

interface Props {
  navigation: any;
}

function DictionaryScreen(props: Props): ReactElement {
  const { navigation } = props;
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSimplified, setIsSimplified] = useState(true);
  const { state, dispatch } = useContext(DictionaryContext);
  const { simplifiedWords, traditionalWords } = state;
  const dictionary = isSimplified ? simplified : traditional;

  const [debounce, setDebounce] = useState(Date.now());
  // @ts-ignore

  useEffect(() => {
    const now = Date.now();
    if (now - debounce > 250 && searchText.length > 0) {
      search();
      setDebounce(now);
    }
  }, [searchText]);

  const search = () => {
    const words = isSimplified ? simplifiedWords : traditionalWords;
    const filteredWords = words.filter(e => {
      return e.includes(searchText);
    });
    let result = [] as any;
    for (const word of filteredWords) {
      // @ts-ignore
      result.push(dictionary[word]);
    }
    result.sort(function(
      a: { hanzi: string | any[] },
      b: { hanzi: string | any[] }
    ) {
      return a.hanzi.length - b.hanzi.length;
    });
    setSearchResult(result);
  };

  function renderSearchBar(): ReactElement {
    return (
      <View style={styles.textInputWrapper}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
            }}
            placeholderTextColor="white"
            placeholder={i18n.t("dictionary-placeholder")}
          />
        </View>
        <View style={styles.changeButtonWrapper}>
          <Switch
            trackColor={{ false: Colors.twitterBlue, true: Colors.twitterBlue }}
            value={!isSimplified}
            onValueChange={() => {
              setIsSimplified(!isSimplified);
            }}
          />
          <Text style={styles.changeButtonText}>
            {isSimplified ? i18n.t("simplified") : i18n.t("traditional")}
          </Text>
        </View>
      </View>
    );
  }

  function renderResultList(): ReactElement {
    return (
      <FlatList
        data={searchResult}
        renderItem={renderResult}
        keyExtractor={KeyExtractor.extract}
        style={{ marginTop: 10 }}
        contentContainerStyle={styles.resultContent}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    );
  }

  // @ts-ignore
  function renderResult({ item }): ReactElement {
    const { pinyin, definition, hanzi } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WordDetailScreen");
        }}
        style={styles.resultContainer}>
        <Text style={styles.word}>{hanzi}</Text>
        <Text style={styles.pinyin}>{pinyin}</Text>
        <Text style={styles.definition} numberOfLines={2}>
          {definition}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <Container style={styles.tabContainer} isPadding={false}>
      {renderSearchBar()}
      {renderResultList()}
    </Container>
  );
}

export default DictionaryScreen;
