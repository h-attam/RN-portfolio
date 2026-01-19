import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
  <View className="flex-row items-center mb-4 mt-6">
    <Ionicons name={icon} size={24} color="#F59E0B" />
    <Text className="text-xl font-bold text-text ml-2">{title}</Text>
  </View>
);

const InfoCard = ({
  title,
  subtitle,
  date,
  description,
}: {
  title: string;
  subtitle: string;
  date?: string;
  description?: string;
}) => (
  <View className="bg-card p-4 rounded-xl border border-gray-800 mb-3">
    <View className="flex-row justify-between items-start mb-1">
      <Text className="text-lg font-bold text-text flex-1 mr-2">{title}</Text>
      {date && (
        <Text className="text-primary text-xs bg-primary/10 px-2 py-1 rounded">
          {date}
        </Text>
      )}
    </View>
    <Text className="text-gray-300 font-medium mb-2">{subtitle}</Text>
    {description && (
      <Text className="text-muted text-sm leading-5">{description}</Text>
    )}
  </View>
);

const AboutScreen = () => {
  const interests = [
    { name: 'Kitap Okumak', icon: 'book' },
    { name: 'Teknoloji', icon: 'hardware-chip' },
    { name: 'Müzik', icon: 'musical-notes' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="p-6 border-b border-card/50">
          <Text className="text-3xl font-bold text-text mb-2">Hakkımda</Text>
          <Text className="text-primary font-bold mb-4">
            React Frontend Developer, React-Native Developer, Backend Developer,
            Full-Stack Developer.
          </Text>
          <Text className="text-muted text-base leading-6">
            Süleyman Demirel Üniversitesi mezunuyum. Tek ve takım çalışması ile
            projelerde görev aldım. İhtiyaçlara uygun etkili çözümler sunabilen
            bir yazılım geliştiricisiyim. Çalışmalarımda çeşitli yazılım
            geliştirme araçlarını kullanıyorum.
          </Text>
        </View>

        <View className="px-6">
          {/* Education Section */}
          <SectionTitle icon="school" title="Eğitim" />
          <InfoCard title="Süleyman Demirel Üniversitesi" subtitle="Mezun" />

          {/* Services Section */}
          <SectionTitle icon="briefcase" title="Hizmetler" />
          <InfoCard
            title="Web Geliştirme"
            subtitle="Frontend & Backend"
            date="Aktif"
            description="Web geliştirmede frontend ve backend alanlarında JavaScript, React gibi modern teknolojilerle dinamik, performanslı ve kullanıcı dostu projeler geliştiriyorum."
          />
          <InfoCard
            title="Uygulama Geliştirme"
            subtitle="Mobil (iOS & Android)"
            date="Aktif"
            description="React Native kullanarak iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar geliştiriyorum. Tek kod tabanıyla çapraz platform çözümler sunuyorum."
          />

          {/* Interests Section */}
          <SectionTitle icon="heart" title="İlgi Alanları" />
          <View className="flex-row flex-wrap gap-3">
            {interests.map((item, index) => (
              <View
                key={index}
                className="bg-card px-4 py-2 rounded-xl flex-row items-center border border-gray-800"
              >
                <Ionicons name={item.icon} size={18} color="#0D9488" />
                <Text className="text-gray-300 ml-2 font-medium">
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
