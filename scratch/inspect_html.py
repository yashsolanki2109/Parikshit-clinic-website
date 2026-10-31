import re
import html
from html.parser import HTMLParser

with open(r'C:\Users\my pc\Downloads\parikshit-clinic-supabase-connected.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's check images
images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*alt=["\']([^"\']*)["\']', content)
if not images:
    images = re.findall(r'<img[^>]+alt=["\']([^"\']*)["\'][^>]*src=["\']([^"\']+)["\']', content)

print(f"Total images found: {len(images)}")
for i, item in enumerate(images):
    src, alt = (item[0], item[1]) if len(item[0]) > 50 else (item[1], item[0])
    is_b64 = src.startswith('data:image')
    b64_type = src.split(';')[0] if is_b64 else 'url'
    print(f"Image {i+1}: alt='{alt}', type='{b64_type}', length={len(src)}")

# Let's dump all text without base64
no_b64 = re.sub(r'data:image\/[^;]+;base64,[a-zA-Z0-9+/=]+', '[BASE64_IMAGE]', content)
with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\scratch\extracted_clinic_page.txt', 'w', encoding='utf-8') as out:
    out.write(no_b64)

print("Wrote extracted_clinic_page.txt without base64 blobs.")
