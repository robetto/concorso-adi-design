import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";

import images from "../../costants/images";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLikedPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const BookMark = () => {
    const { user, setUser, setIsLogged } = useGlobalContext();
    const [refreshing, setRefreshing] = useState(false);

    // const { data: likedPosts, refetch } = useAppwrite(getLikedPosts);
    const { data: likedPosts, refetch } = useAppwrite(() => getLikedPosts(user.$id));

    const onRefresh = async () => {
        setRefreshing(true);

        await refetch();

        setRefreshing(false);
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={likedPosts ?? []}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        title={item.title}
                        thumbnail={item.thumbnail}
                        video={item.video}
                        creator={item.creator.username}
                        avatar={item.creator.avatar}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View className="flex">
                                <Text className="font-pmedium text-sm text-gray-100">
                                    I tuoi preferiti
                                </Text>
                                <Text className="text-2xl text-white font-psemibold">
                                    {user?.username}
                                </Text>
                            </View>

                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    resizeMode="contain"
                                    className="w-9 h-10"
                                />
                            </View>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="Non hai nessun video nei preferiti"
                        subtitle="Aggiungine qualcuno, li troverai in questa sezione!"
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

export default BookMark;
