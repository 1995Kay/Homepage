# Projektübergabe an Codex – Handwerker-Showcase
Stand: 26. November 2026

## Zweck und Arbeitsauftrag
Diese Datei fasst die bisherige Konzeptbesprechung zusammen (kein wortgetreues Chatprotokoll). Sie dient als Kontext für Codex in Visual Studio Code. Prüfe zunächst die vorhandene Projektstruktur und gleiche sie mit diesem Konzept ab. Schlage Änderungen vor, bevor du sie umsetzt. Keine Codeänderungen ohne ausdrückliche Freigabe.

## Geschäftsmodell und Projektziel
Individuell gestaltete Websites für Handwerksbetriebe, jeweils mit eigenem Design und Layout. Kunden wählen optionale digitale Zusatzmodule. Technische Module sollen später wiederverwendbar sein; keine zentrale Plattform für mehrere Betriebe geplant. Die Showcase-Seite präsentiert mögliche individuelle Lösungen, nicht bereits fertig entwickelte Software. Das Abschlussprojekt hat einen Zeitrahmen von acht Wochen.

## Bestehender technischer und gestalterischer Kontext
Im Gespräch genannter Stack: React, Vite, shadcn/ui, Supabase. Schwarz-Orange-Konzept und rechtsseitige ArtCraft-inspirierte Navigation beibehalten. Tatsächlichen Stand im Repository prüfen; keine Annahmen über bereits vorhandene Komponenten treffen.

## Vereinbarte Showcase-Module
1. Baustellenverwaltung: Chef legt Baustellen an, weist Mitarbeiter zu und sieht den Status.
2. Fotodokumentation: Mitarbeiter dokumentieren Fortschritte mit Smartphone, Fotos, Datum und Kommentaren. Chef sieht die Dokumentation und kann später Bilder herunterladen.
3. Einsatzkalender: Wer muss wann auf welche Baustelle?
4. Digitale Stundenzettel: Beginn, Ende, Pausen und Arbeitszeit; Zuordnung zu konkreten Baustellen.
5. Optionales Kundenportal: freigegebene Fotos, Fortschritte, Fragen, Kommentare, Änderungswünsche und digitale Abschlussabnahme.
6. Lager- und Materialverwaltung als Ausblick: Bestände, Entnahmen, Rückgaben, niedrige Bestände, Nachbestellungen; später QR-/Barcode-Scan per Smartphone und mögliche Baustellenzuordnung.

Weitere Vorschläge, noch nicht verbindlich beschlossen: digitale Baustellenberichte mit Fotos, Stunden und Materialverbrauch; Mängelmelder; Objektübersicht für Hausverwaltungen mit mehreren Wohnungen.

## Kundenportal – konkrete Entscheidungen
Der Betrieb entscheidet jederzeit pro Baustelle über den Kundenzugriff:
- Nur intern: kein Kundenzugriff.
- Nur Abschluss: freigegebene Abschlussdokumentation und Abschlussabnahme.
- Projektbegleitung: ausgewählte Fortschritte, Fotos und Kommunikation während der Arbeiten sowie Abschlussabnahme.

Inhalte bleiben standardmäßig intern. Der Chef entscheidet über einzelne Freigaben und kann Zugriff entziehen. Kunden sehen keine internen Arbeitszeiten, Mitarbeiterdaten oder fremden Baustellen. Kunden können eigene Kommentare und Fragen schreiben, beispielsweise zur Trocknungszeit, Nutzbarkeit, Fertigstellung, Farbänderung oder zusätzlichen Räumen. Optional vorbereitete Standardfragen; Antworten durch den Betrieb, nicht automatisch. Zusatzwünsche sind Anfragen und keine automatisch erteilten Aufträge. Keine Zwischenabnahmen erforderlich; digitale Abnahme am Ende. Für Hausverwaltungen könnte später eine Übersicht über berechtigte Wohnungen angeboten werden. Individuelles Branding des Portals kann erwähnt werden, ist aber jetzt nicht auszuarbeiten.

## Umfang der aktuellen Umsetzung
Nur die Präsentation auf der Showcase-Seite gestalten. Keine echte Mitarbeiterverwaltung, kein Login, keine Datenbank für diese Module, keine Foto-Uploads, Lagerbuchungen, Scan-Funktion, Zeiterfassung, Kundenkommunikation oder rechtlich wirksame Abnahme implementieren. Keine funktionsfähige Verwaltungs-App erforderlich. Grafische Darstellung ausdrücklich erwünscht, nicht nur Text: Funktionskarten, kurze Nutzenbeschreibungen und später ein bis zwei Dashboard-Mockups (Chefansicht und Kundenportal), optional ein kurzes GIF zur Fotodokumentation. Bilder/GIF werden später erstellt; jetzt lediglich einplanen. Fiktive Beispieldaten verwenden und Konzeptdarstellungen klar kennzeichnen. Keine fertigen Funktionen vortäuschen.

## Arbeitsplan für Donnerstag, 26. November
- [ ] 1. Seitenstruktur festlegen: Einstieg, Vorteile, Funktionen, Vorschau, Kontakt.
- [ ] 2. Zielgruppe und Hauptbotschaft definieren: Zeitersparnis, Übersicht und bessere Dokumentation für Handwerksbetriebe.
- [ ] 3. Sechs Funktionsmodule auswählen und als Showcase-Karten planen.
- [ ] 4. Drei Kundenzugriffsmodi verständlich erklären.
- [ ] 5. Fiktive Dashboard-Vorschau mit Baustellenstatus, Mitarbeitern, Fotos und Terminen skizzieren.

## Arbeitsplan für Freitag, 27. November
- [ ] 6. Showcase-Karten im bestehenden Design gestalten, ohne echte Verwaltungslogik.
- [ ] 7. Kurze Verkaufstexte mit konkretem Kundennutzen schreiben.
- [ ] 8. Zwei Dashboard-Mockups und optionales GIF zum Foto-Upload planen.
- [ ] 9. Responsive Darstellung auf Smartphone, Tablet und Desktop sowie rechtsseitige Navigation prüfen.
- [ ] 10. Anfragebereich mit klarer Handlungsaufforderung ergänzen und prüfen, dass Konzeptfunktionen nicht als fertig verkauft werden.

## Spätere kommerzielle Umsetzung – Risiken und offene Anforderungen
Projektumfang begrenzen; Datenschutz und Bildrechte beachten; Zugriffsrechte und Datenisolierung absichern; Freigaben widerrufbar gestalten; digitale Abschlussabnahme rechtlich prüfen (Identität, Zeitpunkt, Erklärung, Vorbehalte, Gewährleistung und Zahlung); Änderungsanfragen von Aufträgen trennen; Arbeitszeiten und Korrekturen nachvollziehbar dokumentieren; Lagerkorrekturen und Rückgaben ermöglichen; mobile Bedienbarkeit und schlechten Empfang berücksichtigen; Hosting, Backups, Wartung und Support einkalkulieren. Diese Punkte sind keine aktuellen Implementierungsaufträge.

## Nächster Schritt für Codex
Lies diese Datei als Projektkontext. Prüfe nach Aufforderung den aktuellen Stand der Handwerker-Showcase-Seite. Zeige zunächst, welche der zehn Aufgaben bereits erledigt sind, welche fehlen und welche Dateien betroffen wären. Erstelle keine neuen Module oder Backend-Funktionen und ändere nichts ohne Freigabe. Bei Unklarheiten nachfragen. Bestehende Gestaltung und funktionierende Bestandteile erhalten.
