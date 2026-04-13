# IK Karta 2.0 — Adaptační systém

> Interaktivní nástroj pro řízení adaptace poradců a manažerů ve finančním poradenství.

**[→ Otevřít aplikaci](https://jakubdvorak009.github.io/ik-karta)**

---

## O projektu

IK Karta 2.0 je webová aplikace nahrazující Excel tabulku pro sledování adaptačního procesu. Umožňuje manažerům a oblastním ředitelům strukturovaně provázet nováčky prvními měsíci spolupráce.

### Klíčové funkce

- **Dvě role** – manažer sleduje adaptaci poradce, ředitel sleduje adaptaci nového manažera
- **Automatický aktuální týden** – aplikace počítá týden adaptace od data nástupu
- **Více osob paralelně** – každý nováček má vlastní stav checklistu a záznamy
- **IK záznamy** – strukturované zápisky z 1:1 schůzek s úkoly pro obě strany
- **E-mail integrace** – úkoly z IK schůzky jde jedním kliknutím poslat nováčkovi
- **Offline provoz** – stav se ukládá lokálně, funguje bez internetu

---

## Technický přehled

| Vrstva | Technologie | Poznámka |
|--------|-------------|----------|
| Frontend | HTML5 / CSS3 / Vanilla JS | Žádné závislosti, jeden soubor |
| Uložiště | `localStorage` | Data v prohlížeči uživatele |
| Hosting | GitHub Pages | Statický, HTTPS, zdarma |
| Font | DM Sans + DM Mono | Google Fonts |

### Architektura

```
ik-karta/
├── index.html        # Celá aplikace (frontend + logika)
└── README.md         # Tato dokumentace
```

---

## Roadmapa

### ✅ Fáze 1 – Prototyp (aktuální)
- Adaptační checklist poradce a manažera
- IK záznamy s e-mail exportem
- Lokální uložiště (localStorage)
- GitHub Pages hosting

### 🔜 Fáze 2 – Backend & Autentizace
- [ ] Supabase databáze (PostgreSQL, EU region, GDPR)
- [ ] Přihlášení uživatelů (email / Google SSO)
- [ ] Row-level security – každý vidí jen svá data
- [ ] Synchronizace napříč zařízeními

### 🔮 Fáze 3 – Rozšíření CRM
- [ ] Pipeline klientů a hypo proces
- [ ] Náborová pipeline (Projekt 30/100)
- [ ] Statistiky manažera a reporting
- [ ] Multi-tenant SaaS (více firem)

---

## Lokální spuštění

Žádná instalace není potřeba. Stáhněte `index.html` a otevřete v prohlížeči.

```bash
git clone https://github.com/jakubdvorak009/ik-karta.git
open ik-karta/index.html
```

---

## Kontakt

**Jakub Dvořák** · Area Director · [dvorakconsulting.cz](https://dvorakconsulting.cz)

---

*Postaveno s Claude · Verze 1.0 · Duben 2026*
