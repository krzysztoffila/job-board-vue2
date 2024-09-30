# Job Dashboard

Job Dashboard to aplikacja stworzona przy użyciu Vue 2 i Firebase, która umożliwia użytkownikom wyszukiwanie ofert pracy w czasie rzeczywistym, dodawanie nowych ofert oraz przeglądanie ich w intuicyjny sposób. Aplikacja oferuje również paginację, co ułatwia nawigację w długich listach ofert.

## Adres projektu

Aplikacja jest dostępna pod adresem: [Jobtopia](https://jobtopia.netlify.app/)

## Technologie

- **Vue 2**: Framework JavaScript do budowania interfejsów użytkownika.
- **Firebase**: Platforma do przechowywania danych w czasie rzeczywistym.
- **CSS**: Używane do stylizacji aplikacji.

## Funkcjonalności

- **Wyszukiwanie ofert pracy**: Użytkownicy mogą wyszukiwać oferty w czasie rzeczywistym, co umożliwia szybkie znajdowanie odpowiednich propozycji.
- **Dodawanie nowych ofert**: Użytkownicy mogą dodawać nowe oferty pracy, które są następnie przechowywane w bazie danych Firebase.
- **Paginacja**: Aplikacja obsługuje paginację, co pozwala na efektywne przeglądanie długich list ofert pracy.

## Instalacja

1. Sklonuj repozytorium na swój lokalny komputer:

   ```bash
   git clone git@github.com:krzysztoffila/job-board-vue2.git
   ```

2. Zainstaluj zależności:

   ```bash
   cd job-board-vue2
   npm install
   ```

3. Skonfiguruj Firebase, tworząc nowy projekt w konsoli Firebase i dodając odpowiednie dane konfiguracyjne do aplikacji.

4. Uruchom aplikację:

   ```bash
   npm run serve
   ```

5. Otwórz przeglądarkę i wejdź na adres `http://localhost:8080`.

## Jak używać

1. Po uruchomieniu aplikacji, użytkownicy mogą przeszukiwać oferty pracy za pomocą pola wyszukiwania.
2. Aby dodać nową ofertę, kliknij przycisk "Dodaj pracę", wypełnij formularz i zatwierdź.
3. Oferty są automatycznie zapisywane w bazie danych Firebase i będą dostępne dla wszystkich użytkowników.

## Przykłady użycia

Możesz zobaczyć działanie aplikacji na poniższych zrzutach ekranu (dodaj tutaj zrzuty ekranu, jeśli masz):

![Dashboard](https://imgur.com/v3GkBW8)
![Pop up po dodaniu oferty](https://imgur.com/K09dVZB)
![Formularz Add Job](https://imgur.com/zdvUItK)

## Wkład

Jeśli chcesz przyczynić się do rozwoju projektu, poczuj się swobodnie, aby zgłosić problem lub przesłać pull request.

## Licencja

Ten projekt jest licencjonowany na zasadach [MIT License](LICENSE).
