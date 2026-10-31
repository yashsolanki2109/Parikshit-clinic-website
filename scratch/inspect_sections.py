import re

with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\scratch\extracted_clinic_page.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all sections, headers, paragraphs, and list items
# Clean out HTML tags cleanly
def clean_tag(s):
    s = re.sub(r'<script.*?</script>', '', s, flags=re.DOTALL)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.DOTALL)
    s = re.sub(r'<[^>]+>', '\n', s)
    lines = [line.strip() for line in s.splitlines() if line.strip()]
    return '\n'.join(lines)

clean_text = clean_tag(text)
with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\scratch\all_clinic_text.txt', 'w', encoding='utf-8') as f:
    f.write(clean_text)

print("Saved all_clinic_text.txt. Total lines:", len(clean_text.splitlines()))

# Also find script content
scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', text, flags=re.DOTALL)
with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\scratch\clinic_scripts.js', 'w', encoding='utf-8') as f:
    for i, s in enumerate(scripts):
        f.write(f"// --- SCRIPT {i+1} ---\n")
        f.write(s.strip() + "\n\n")

print("Saved clinic_scripts.js. Found scripts:", len(scripts))
