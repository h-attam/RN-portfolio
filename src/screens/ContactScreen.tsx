import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContactScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-2xl font-bold text-text mb-4">İletişim</Text>
        <Text className="text-muted mb-6">
          Have a project in mind? Let's build something amazing.
        </Text>

        <View className="mb-4">
          <Text className="text-text mb-2">Your Name</Text>
          <TextInput
            className="bg-card text-text p-4 rounded-lg"
            placeholder="John Doe"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View className="mb-4">
          <Text className="text-text mb-2">Email Address</Text>
          <TextInput
            className="bg-card text-text p-4 rounded-lg"
            placeholder="john@example.com"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View className="mb-6">
          <Text className="text-text mb-2">Your Message</Text>
          <TextInput
            className="bg-card text-text p-4 rounded-lg h-32"
            placeholder="Tell me about your project..."
            placeholderTextColor="#9CA3AF"
            multiline
          />
        </View>

        <TouchableOpacity className="bg-primary p-4 rounded-lg items-center">
          <Text className="text-text font-bold text-lg">Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
