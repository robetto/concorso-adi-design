import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";

import { icons } from "../costants";
import { router, usePathname } from "expo-router";

const SearchInput = () => {
    const pathname = usePathname();
    const [query, setQuery] = useState("");

    return (
        <View className="space-x-4 flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center">
            <TextInput
                className="flex-1 text-white font-psemibold text-base mt-0.5 flex-1 font-pregular"
                placeholder="Search for a video topic"
                value={query}
                placeholderTextColor="#CDCDE0"
                onChangeText={(e) => setQuery(e)}
            />
            <TouchableOpacity
                onPress={() => {
                    if (!query) {
                        return Alert.alert(
                            "missing query",
                            "Please input something"
                        );
                    }

                    if (pathname.startsWith("/search")) {
                        router.setParams({ query: query });
                    } else {
                        router.push(`/search/${query}`);
                    }
                }}
            >
                <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};
export default SearchInput;
