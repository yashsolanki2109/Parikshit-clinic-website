import urllib.request

url = 'http://localhost:3000'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')

    print('Status code:', resp.status)
    print('HTML Length:', len(html))

    keywords = [
        'PARIKSHIT CLINIC',
        'Dr. Jinal Parmar',
        '70162 92613',
        '98796 10179',
        'parikshitclinic20@gmail.com',
        'Vadodara',
        'Siddharth Elegance Complex',
        '10:00 AM',
        'MDS (Periodontist)',
        'FFAC',
        'Lumina Dental Studio',
        'Clara Vance',
        '(415) 890-3200'
    ]

    for kw in keywords:
        present = kw in html
        print(f'Keyword "{kw}": {"FOUND" if present else "NOT PRESENT"}')
except Exception as e:
    print("Error connecting:", e)
