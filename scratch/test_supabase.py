import urllib.request
import json

url = "https://csygqddvuaivkraxorth.supabase.co/rest/v1/appointments"
anon_key = "sb_publishable_jVz32GHQxRc5Wi70VlicFg_FRNTIQdO"

headers = {
    "apikey": anon_key,
    "Authorization": f"Bearer {anon_key}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

# Payload test
payload = {
    "patient_name": "Test Patient",
    "phone": "+91 99999 88888",
    "age": 30,
    "city": "Vadodara",
    "department": "Dental Treatments",
    "treatment": "Routine Dental Exam & Ultrasonic Cleaning",
    "appointment_date": "Tuesday, Oct 21, 2026",
    "appointment_time": "10:30 AM",
    "status": "pending"
}

data = json.dumps(payload).encode("utf-8")
req = urllib.request.Request(url, data=data, headers=headers, method="POST")

try:
    with urllib.request.urlopen(req) as resp:
        print("Supabase Insert Response Code:", resp.status)
        print("Success! Table 'appointments' accepted the payload.")
except urllib.error.HTTPError as e:
    print("HTTP Error:", e.code, e.read().decode("utf-8"))
except Exception as e:
    print("Error:", e)
