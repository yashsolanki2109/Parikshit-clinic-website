import re

with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\scratch\extracted_clinic_page.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find all section tags and their headings/classes
sections = re.findall(r'<section\b[^>]*>(.*?)</section>', text, flags=re.DOTALL)
print(f"Total sections: {len(sections)}")

for i, s in enumerate(sections):
    headings = re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', s, flags=re.DOTALL)
    clean_h = [re.sub(r'<[^>]+>', '', h[1]).strip() for h in headings]
    print(f"\n--- Section {i+1} ---")
    print("Headings:", clean_h[:6])
    paras = re.findall(r'<p[^>]*>(.*?)</p>', s, flags=re.DOTALL)
    for p in paras[:3]:
        cp = re.sub(r'<[^>]+>', '', p).strip()
        if cp:
            print("  P:", cp[:120])
