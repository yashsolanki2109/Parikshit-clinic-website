import re
import base64

with open(r'C:\Users\my pc\Downloads\parikshit-clinic-supabase-connected.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'data:image\/png;base64,([a-zA-Z0-9+/=]+)', content)
if m:
    b64_data = m.group(1)
    img_bytes = base64.b64decode(b64_data)
    with open(r'C:\Users\my pc\Desktop\Yash_Project\Dental_Project\public\parikshit-logo.png', 'wb') as img_out:
        img_out.write(img_bytes)
    print(f"Extracted parikshit-logo.png: {len(img_bytes)} bytes")
else:
    print("No png base64 match found")
