import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../costants";
import CustomButton from "../components/CustomButton";

const Welcome = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[190px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[298px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Candidature selezioni{"\n"}
                            <Text className="text-secondary-200">
                                Compasso d'oro 2022
                            </Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Le candidature per le selezioni adi design index 2024
                        sono aperte fino al 22 febbraio 2024
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push("/login")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
};

export default Welcome;
