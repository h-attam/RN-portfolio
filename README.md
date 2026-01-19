# HaticePortfolio

Bu proje, React Native kullanılarak geliştirilmiş kişisel bir portfolyo mobil uygulamasıdır. Uygulama, geliştiricinin biyografisini, yeteneklerini, projelerini ve iletişim bilgilerini modern ve kullanıcı dostu bir arayüzle sunmayı amaçlamaktadır.

## Özellikler

Uygulama aşağıdaki ana bölümlerden oluşmaktadır:

- **Ana Sayfa (Home):** Kullanıcıyı karşılayan giriş ekranı. Profil fotoğrafı, kısa biyografi, öne çıkan yetenekler ve projelerin özetini içerir.
- **Hakkımda (About):** Geliştiricinin eğitim geçmişi, iş deneyimleri, sunduğu hizmetler ve ilgi alanları hakkında detaylı bilgi verir.
- **Projeler (Projects):** Geliştirilen mobil ve web projelerinin listelendiği, detaylı açıklamaların ve kullanılan teknolojilerin yer aldığı bölümdür.
- **İletişim (Contact):** Kullanıcıların geliştirici ile iletişime geçebilmesi için gerekli bilgileri ve formu içerir.

## Kullanılan Teknolojiler

Proje geliştirme sürecinde aşağıdaki teknolojiler ve kütüphaneler kullanılmıştır:

- **React Native:** Çapraz platform mobil uygulama geliştirme çerçevesi.
- **TypeScript:** Statik tip kontrolü sağlayan JavaScript üst kümesi.
- **NativeWind (Tailwind CSS):** React Native için stil yönetim kütüphanesi.
- **React Navigation:** Uygulama içi yönlendirme ve navigasyon yönetimi (Stack ve Bottom Tabs).
- **React Native Vector Icons:** Uygulama genelinde kullanılan ikon seti (Ionicons).
- **React Native Reanimated:** Performanslı animasyonlar için kullanılan kütüphane.
- **React Native Safe Area Context:** Çentikli ekranlar ve güvenli alan yönetimi için.

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Depoyu Klonlayın:**
    Projeyi bilgisayarınıza indirin.

2.  **Bağımlılıkları Yükleyin:**
    Proje dizininde terminali açın ve gerekli paketleri yükleyin.

    ```bash
    npm install
    ```

3.  **iOS İçin Kurulum (Sadece macOS):**
    CocoaPods bağımlılıklarını yükleyin.

    ```bash
    cd ios
    pod install
    cd ..
    ```

4.  **Uygulamayı Başlatın:**

    - **iOS için:**

      ```bash
      npx react-native run-ios
      ```

    - **Android için:**
      ```bash
      npx react-native run-android
      ```

## Lisans

Bu proje kişisel kullanım için geliştirilmiştir. Tüm hakları saklıdır.
