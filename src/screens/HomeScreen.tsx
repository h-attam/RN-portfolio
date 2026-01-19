import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const skills = [
    { name: 'React Native', icon: 'logo-react' },
    { name: 'TypeScript', icon: 'code-slash' },
    { name: 'JavaScript', icon: 'logo-javascript' },
    { name: 'Tailwind CSS', icon: 'color-palette' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'UI/UX Design', icon: 'brush' },
  ];

  const featuredProjects = [
    {
      title: 'E-Ticaret Uygulaması',
      description: 'Modern ve kullanıcı dostu bir mobil alışveriş deneyimi.',
      tech: 'React Native, Redux',
    },
    {
      title: 'Kripto Cüzdan Takibi',
      description:
        'Gerçek zamanlı piyasa verileri ve portföy yönetimi sunan finansal analiz aracı.',
      tech: 'React Native, API, Charts',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Hero Section */}
        <View className="p-6 items-center border-b border-card/50">
          <View className="flex-row items-center">
            <Text className="text-3xl font-bold text-text text-center mr-2">
              Merhaba, Ben Hatice
            </Text>
          </View>
          <Text className="text-xl text-primary font-medium mt-2">
            Full-Stack Developer
          </Text>
          <Text className="text-muted text-center mt-4 leading-6">
            Web ve mobil dünyasında JavaScript temelli teknolojilerle kullanıcı
            odaklı, performanslı ve modern uygulamalar geliştiriyorum.
            Frontend'de React, mobilde React Native, backend tarafında ise güçlü
            altyapılarla uçtan uca projeler üretiyorum.
          </Text>

          <View className="flex-row mt-8 gap-4">
            <TouchableOpacity
              onPress={() => navigation.navigate('Projects' as never)}
              className="bg-primary px-6 py-3 rounded-full flex-row items-center"
            >
              <Ionicons name="code-working" size={20} color="white" />
              <Text className="text-white font-bold ml-2">Projelerim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Contact' as never)}
              className="bg-card px-6 py-3 rounded-full flex-row items-center border border-gray-700"
            >
              <Ionicons name="mail-outline" size={20} color="#94A3B8" />
              <Text className="text-muted font-bold ml-2">İletişim</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Skills Section */}
        <View className="p-6">
          <View className="flex-row items-center mb-4">
            <Ionicons name="flash" size={24} color="#F59E0B" />
            <Text className="text-xl font-bold text-text ml-2">Yetenekler</Text>
          </View>
          <View className="flex-row flex-wrap gap-3">
            {skills.map((skill, index) => (
              <View
                key={index}
                className="bg-card px-4 py-2 rounded-xl flex-row items-center border border-gray-800"
              >
                <Ionicons name={skill.icon} size={18} color="#0D9488" />
                <Text className="text-gray-300 ml-2 font-medium">
                  {skill.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Featured Projects Section */}
        <View className="p-6 pt-0">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Ionicons name="star" size={24} color="#F59E0B" />
              <Text className="text-xl font-bold text-text ml-2">
                Öne Çıkanlar
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Projects' as never)}
            >
              <Text className="text-primary font-medium">Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-4">
            {featuredProjects.map((project, index) => (
              <View
                key={index}
                className="bg-card p-4 rounded-2xl border border-gray-800"
              >
                <View className="flex-row justify-between items-start">
                  <View className="bg-primary/10 p-2 rounded-lg">
                    <Ionicons name="phone-portrait" size={24} color="#0D9488" />
                  </View>
                  <Ionicons name="arrow-forward" size={20} color="#64748B" />
                </View>
                <Text className="text-lg font-bold text-text mt-3">
                  {project.title}
                </Text>
                <Text className="text-muted mt-1 text-sm">
                  {project.description}
                </Text>
                <View className="mt-3 flex-row">
                  <Text className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.tech}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
