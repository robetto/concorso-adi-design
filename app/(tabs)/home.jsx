import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../costants/images";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
    
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        //aggiorna video

        setRefreshing(false);
    };

    return (
        <SafeAreaView classname="bg-primary h-full">
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <Text classname="text-3xl">{item.id}</Text>
                )}
                ListHeaderComponent={() => (
                    <View classname="my-6 px-4 space-y-6">
                        <View classname="justify-between items-start flex-row mb-6">
                            <View>
                                <Text classname="font-pmedium text-sm text-gray-100">
                                    Welcome Back
                                </Text>
                                <Text classname="text-2xl text-white font-psemibold">
                                    JS Mastery
                                </Text>
                            </View>

                            <View classname="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    resizeMode="contain"
                                    classname="w-9 h-10"
                                />
                            </View>
                        </View>

                        <SearchInput />

                        <View classname="w-full flex-1 pt-5 pb-8">
                            <Text classname="text-gray-100 text-lg font-pregular mb-3">
                                Ultimi Video
                            </Text>
                            <Trending posts={[{ id: 1 }, { id: 2 }]} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="Nessun video trovato"
                        subtitle="Be the first one to upload a video!"
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Home;
