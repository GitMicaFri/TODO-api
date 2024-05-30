Övningsuppgifter
1. Enkel CRUD-applikation för en "To-Do" lista
Beskrivning: Bygg en enkel RESTful API för att hantera en "To-Do" lista. Varje "To-Do" objekt ska ha ett namn, en beskrivning, och en status (om den är klar eller inte).

Uppgifter:

Skapa ett Mongoose schema och modell för "To-Do" objektet.
Implementera endpoints för att:
Skapa en ny "To-Do" (POST /todos)
Hämta alla "To-Do" objekt (GET /todos)
Hämta en specifik "To-Do" med ID (GET /todos/:id)
Uppdatera en "To-Do" med ID (PUT /todos/:id)
Radera en "To-Do" med ID (DELETE /todos/:id)
2. Användarhantering med autentisering
Beskrivning: Skapa en enkel användarhanteringsapplikation med registrering, inloggning och åtkomstskyddade endpoints.

Uppgifter:

Skapa Mongoose scheman och modeller för "User".
Implementera endpoints för att:
Registrera en ny användare (POST /register)
Logga in en användare (POST /login)
Hämta användarprofilen (GET /profile)
Använd JWT (JSON Web Tokens) för autentisering och skydda endpoints som kräver att användaren är inloggad.

3. Bloggplattform
Beskrivning: Skapa en enkel bloggplattform där användare kan skapa, läsa, uppdatera och radera blogginlägg.

Uppgifter:

Skapa Mongoose scheman och modeller för "User" och "Post".
Implementera endpoints för att:
Skapa ett nytt blogginlägg (POST /posts)
Hämta alla blogginlägg (GET /posts)
Hämta ett specifikt blogginlägg med ID (GET /posts/:id)
Uppdatera ett blogginlägg med ID (PUT /posts/:id)
Radera ett blogginlägg med ID (DELETE /posts/:id)
Implementera relationshantering där varje inlägg kopplas till en användare.
4. Bokhanteringssystem
Beskrivning: Skapa ett system för att hantera en bokdatabas där varje bok har en titel, en författare, en genre och ett publiceringsår.

Uppgifter:

Skapa Mongoose scheman och modeller för "Book".
Implementera endpoints för att:
Lägga till en ny bok (POST /books)
Hämta alla böcker (GET /books)
Hämta en specifik bok med ID (GET /books/:id)
Uppdatera en bok med ID (PUT /books/:id)
Radera en bok med ID (DELETE /books/:id)
Implementera filtrering och sökning efter böcker baserat på titel, författare eller genre.
5. Kommentarssystem för blogginlägg
Beskrivning: Bygg vidare på bloggplattformen genom att lägga till ett kommentarssystem där användare kan kommentera blogginlägg.

Uppgifter:

Skapa ett Mongoose schema och modell för "Comment".
Implementera endpoints för att:
Lägga till en kommentar till ett blogginlägg (POST /posts/:id/comments)
Hämta alla kommentarer för ett specifikt blogginlägg (GET /posts/:id/comments)
Hämta en specifik kommentar med ID (GET /comments/:id)
Uppdatera en kommentar med ID (PUT /comments/:id)
Radera en kommentar med ID (DELETE /comments/:id)
Implementera relationshantering där kommentarer kopplas till både blogginlägg och användare.