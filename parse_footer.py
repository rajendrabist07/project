import re
import json

with open('src/Components/Footer.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract social links
social_links_pattern = re.compile(r'<a href="([^"]+)".*?class="[^"]*tw-text-gray-600[^"]*">.*?<span class="svg-wrapper[^"]*">(.*?</svg>)', re.DOTALL)
socials = []
for m in social_links_pattern.finditer(text):
    socials.append({
        'url': m.group(1),
        'icon': m.group(2).strip()
    })

# Extract menus
menus = []
menu_blocks = re.findall(r'<h4 class="footer-block__heading[^>]*>(.*?)</h4>(.*?)</ul>', text, re.DOTALL)
for block in menu_blocks:
    title = block[0].strip()
    links_text = block[1]
    
    links = []
    for link_m in re.finditer(r'<a href="([^"]+)".*?>(.*?)</a>', links_text, re.DOTALL):
        links.append({
            'url': link_m.group(1).replace('&amp;', '&'),
            'text': link_m.group(2).strip()
        })
    menus.append({
        'title': title,
        'links': links
    })

# Extract payment methods
payments = []
payment_blocks = re.findall(r'<li class="list-payment__item">(.*?)</li>', text, re.DOTALL)
for pb in payment_blocks:
    payments.append(pb.strip())

# Extract countries
countries = []
country_blocks = re.findall(r'<li class="disclosure__item[^>]*>(.*?)</li>', text, re.DOTALL)
for cb in country_blocks:
    m = re.search(r'data-value="([^"]+)"', cb)
    if m:
        code = m.group(1)
        # find flag
        flag_m = re.search(r'background-image: url\(([^)]+)\)', cb)
        flag = flag_m.group(1) if flag_m else f"//cdn.shopify.com/static/images/flags/{code.lower()}.svg?width=32"
        # find currency and symbol
        currency_m = re.search(r'([A-Z]{3})\(([^)]+)\)', cb)
        if currency_m:
            currency = currency_m.group(1)
            symbol = currency_m.group(2)
        else:
            currency = "USD"
            symbol = "$"
        
        # Avoid duplicates
        if not any(c['code'] == code for c in countries):
            countries.append({
                'code': code,
                'flag': flag,
                'currency': currency,
                'symbol': symbol
            })

with open('src/Components/FooterData.jsx', 'w', encoding='utf-8') as f:
    f.write('import React from "react";\n\n')
    f.write('export const SOCIAL_LINKS = [\n')
    for s in socials:
        f.write('  {\n')
        f.write(f'    url: "{s["url"]}",\n')
        f.write(f'    icon: ({s["icon"].replace("class=", "className=").replace("stroke-width=", "strokeWidth=").replace("stroke-linecap=", "strokeLinecap=").replace("stroke-linejoin=", "strokeLinejoin=").replace("fill-rule=", "fillRule=").replace("clip-rule=", "clipRule=")}),\n')
        f.write('  },\n')
    f.write('];\n\n')
    
    f.write('export const FOOTER_MENUS = [\n')
    for m in menus:
        f.write('  {\n')
        f.write(f'    title: "{m["title"]}",\n')
        f.write('    links: [\n')
        for l in m["links"]:
            f.write(f'      {{ text: "{l["text"]}", url: "{l["url"]}" }},\n')
        f.write('    ]\n')
        f.write('  },\n')
    f.write('];\n\n')
    
    f.write('export const PAYMENT_METHODS = [\n')
    for p in payments:
        f.write(f'  ({p.replace("class=", "className=").replace("stroke-width=", "strokeWidth=").replace("stroke-linecap=", "strokeLinecap=").replace("stroke-linejoin=", "strokeLinejoin=").replace("fill-rule=", "fillRule=").replace("clip-rule=", "clipRule=")}),\n')
    f.write('];\n\n')
    
    f.write('export const COUNTRIES = [\n')
    for c in countries:
        f.write('  {\n')
        f.write(f'    code: "{c["code"]}",\n')
        f.write(f'    flag: "{c["flag"]}",\n')
        f.write(f'    currency: "{c["currency"]}",\n')
        f.write(f'    symbol: "{c["symbol"]}",\n')
        f.write('  },\n')
    f.write('];\n')

print("Data extracted successfully!")
