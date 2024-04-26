import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../costants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const LogIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields");
            return;
        }

        setIsSubmitting(true);

        try {
            await signIn(form.email, form.password)
            router.replace("/home")
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary w-full h-full">
            <ScrollView className="w-full">
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6 ">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[200px] h-[100px]"
                    />
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                        Entra in ADI DESIGN INDEX
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                email: e,
                            })
                        }
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                password: e,
                            })
                        }
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Login"
                        handlePress={submit}
                        containerStyles="w-full mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap-2 items-center">
                        <Text className="text-lg text-gray-100">
                            Non hai un account?
                        </Text>
                        <Link
                            href="/registrati"
                            className="text-lg font-psemibold text-secondary-100"
                        >
                            Registrati
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LogIn;
