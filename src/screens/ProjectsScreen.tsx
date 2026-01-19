import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const projects = [
  {
    title: 'E-Ticaret Uygulaması',
    description:
      'Modern ve kullanıcı dostu bir mobil alışveriş deneyimi. Ürün listeleme, sepet yönetimi ve ödeme entegrasyonu içerir.',
    tech: ['React Native', 'Redux', 'Node.js'],
    icon: 'cart',
  },
  {
    title: 'Kripto Cüzdan Takibi',
    description:
      'Gerçek zamanlı piyasa verileri ve portföy yönetimi sunan finansal analiz aracı. Canlı grafikler ve alarm özellikleri.',
    tech: ['React Native', 'API', 'Charts'],
    icon: 'wallet',
  },
  {
    title: 'Task Yöneticisi',
    description:
      'Kişisel ve takım çalışmaları için görev takip uygulaması. Proje yönetimi, zaman takibi ve işbirliği araçları.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    icon: 'checkbox',
  },
  {
    title: 'Hava Durumu Uygulaması',
    description:
      'Konum bazlı detaylı hava durumu tahminleri. Saatlik ve haftalık tahminler, hava kalitesi indeksi.',
    tech: ['React Native', 'OpenWeatherMap API'],
    icon: 'cloud',
  },
  {
    title: 'Film Rehberi',
    description:
      'Popüler filmleri ve detaylarını listeleyen rehber uygulaması. Fragman izleme ve favori listesi oluşturma.',
    tech: ['React', 'TMDB API'],
    icon: 'videocam',
  },
];

const TechBadge = ({ text }: { text: string }) => (
  <View className="bg-primary/10 px-2 py-1 rounded-md mr-2 mb-2">
    <Text className="text-primary text-xs font-medium">{text}</Text>
  </View>
);

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <View className="bg-card p-4 rounded-2xl border border-gray-800 mb-4">
    <View className="flex-row justify-between items-start mb-3">
      <View className="bg-primary/10 p-3 rounded-xl">
        <Ionicons name={project.icon} size={24} color="#0D9488" />
      </View>
      <TouchableOpacity>
        <Ionicons name="arrow-forward-circle" size={28} color="#64748B" />
      </TouchableOpacity>
    </View>
    <Text className="text-xl font-bold text-text mb-2">{project.title}</Text>
    <Text className="text-muted text-sm leading-5 mb-4">
      {project.description}
    </Text>
    <View className="flex-row flex-wrap">
      {project.tech.map((t, index) => (
        <TechBadge key={index} text={t} />
      ))}
    </View>
  </View>
);

const ProjectsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <View className="mb-6">
          <Text className="text-3xl font-bold text-text mb-2">Projelerim</Text>
          <Text className="text-muted">
            Geliştirdiğim seçilmiş projelerden bazıları.
          </Text>
        </View>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectsScreen;
