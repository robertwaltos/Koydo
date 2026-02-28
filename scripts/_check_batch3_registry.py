"""Check which batch 3 books already have modules in the registry."""
import json, re, os

# Load batch 3 book list
books = [
    ("hume_religion", "Principal Writings on Religion", "David Hume"),
    ("capitalism_ideal", "Capitalism: The Unknown Ideal", "Ayn Rand"),
    ("objectivist_epist", "Introduction to Objectivist Epistemology", "Ayn Rand"),
    ("metaphysics", "Metaphysics", "Aristotle"),
    ("jekyll_hyde", "Strange Case of Dr Jekyll and Mr Hyde and Other Tales", "Robert Louis Stevenson"),
    ("don_quixote", "Don Quixote", "Miguel de Cervantes"),
    ("beginnings_learn", "Beginnings of Learning", "Jiddu Krishnamurti"),
    ("pompeii", "Resurrecting Pompeii", "Estelle Lazer"),
    ("civil_war_dummies", "The Civil War For Dummies", "Keith D. Dickson"),
    ("blood_rage", "Blood and Rage: A Cultural History of Terrorism", "Michael Burleigh"),
    ("decline_fall", "The History of the Decline and Fall of the Roman Empire", "Edward Gibbon"),
    ("citizen_soldiers", "Citizen Soldiers", "Stephen E. Ambrose"),
    ("endurance", "The Endurance: Shackleton's Legendary Antarctic Expedition", "Caroline Alexander"),
    ("marne_1914", "The Marne, 1914", "Holger H. Herwig"),
    ("amer_civil_war", "The American Civil War and the Wars of the Industrial Revolution", "Brian Holden Reid"),
    ("history_zionism", "A History of Zionism", "Walter Laqueur"),
    ("disciplined_entrep", "Disciplined Entrepreneurship", "Bill Aulet"),
    ("iousa", "I.O.U.S.A.", "Addison Wiggin; Kate Incontrera"),
    ("microeconomics", "Microeconomics, 4th Edition", "David Besanko"),
    ("money_mischief", "Money Mischief", "Milton Friedman"),
    ("no_logo", "No Logo", "Naomi Klein"),
    ("red_capitalism", "Red Capitalism", "Carl E. Walter; Fraser J. T. Howie"),
    ("lean_entrepreneur", "The Lean Entrepreneur", "Brant Cooper"),
    ("paper_money", "Paper Money Collapse", "Detlev S. Schlichter"),
    ("freakonomics", "Freakonomics", "Steven D. Levitt"),
    ("good_business", "Good Business: Leadership, Flow, and the Making of Meaning", "Mihaly Csikszentmihalyi"),
    ("catching_fire", "Catching Fire: How Cooking Made Us Human", "Richard Wrangham"),
    ("origin_species", "The Origin of Species", "Charles Darwin"),
    ("demon_haunted", "The Demon-Haunted World: Science as a Candle in the Dark", "Carl Sagan"),
    ("god_delusion", "The God Delusion", "Richard Dawkins"),
    ("short_history", "A Short History of Nearly Everything", "Bill Bryson"),
    ("death_black_hole", "Death by Black Hole", "Neil deGrasse Tyson"),
    ("cosmos", "Cosmos", "Carl Sagan"),
    ("elegant_universe", "The Elegant Universe", "Brian Greene"),
    ("from_eternity", "From Eternity to Here", "Sean Carroll"),
    ("genius_feynman", "Genius: The Life and Science of Richard Feynman", "James Gleick"),
    ("theory_everything", "Illustrated Theory of Everything", "Stephen Hawking"),
    ("quantum_theory", "Quantum Theory Cannot Hurt You", "Marcus Chown"),
    ("omnivores_dilemma", "The Omnivore's Dilemma", "Michael Pollan"),
    ("kitchen_mysteries", "Kitchen Mysteries: Revealing the Science of Cooking", "Hervé This"),
    ("day_universe", "The Day the Universe Changed", "James Burke"),
    ("denialism", "Denialism: How Irrational Thinking Hinders Scientific Progress", "Michael Specter"),
    ("alice_quantumland", "Alice in Quantumland", "Robert Gilmore"),
    ("interpretation_dreams", "The Interpretation of Dreams", "Sigmund Freud"),
    ("alone_together", "Alone Together", "Sherry Turkle"),
    ("59_seconds", "59 Seconds: Think a Little, Change a Lot", "Richard Wiseman"),
    ("linchpin", "Linchpin: Are You Indispensable?", "Seth Godin"),
    ("seven_habits", "Seven Habits of Highly Effective People", "Stephen R. Covey"),
    ("network_warrior", "Network Warrior", "Gary A. Donahue"),
    ("tcp_ip_illustrated", "TCP/IP Illustrated, Volume 1: The Protocols", "W. Richard Stevens"),
]

# Check existing epub-generated files
epub_dir = "src/lib/modules/catalog/epub-generated"
existing_files = set(f[:-3] for f in os.listdir(epub_dir) if f.endswith('.ts'))

# For each book, check if a matching file exists
print(f"{'Key':25s} {'Has File':10s} {'Filename':60s}")
print("-" * 100)

# Title to filename slug matching
def title_to_possible_slugs(title, creator):
    """Generate possible filename slugs"""
    results = []
    # Full title + first creator
    first_creator = creator.split(';')[0].strip()
    raw = title + ' ' + first_creator
    slug = re.sub(r'[^a-z0-9]+', '-', raw.lower()).strip('-')[:50]
    results.append(slug)
    # Just title
    slug2 = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')[:50]
    results.append(slug2)
    return results

for key, title, creator in books:
    slugs = title_to_possible_slugs(title, creator)
    found = None
    for slug in slugs:
        for ef in existing_files:
            if slug[:20] in ef or ef[:20] in slug:
                found = ef
                break
        if found:
            break
    status = "YES" if found else "NO"
    fname = found or "(new file needed)"
    print(f"{key:25s} {status:10s} {fname:60s}")
