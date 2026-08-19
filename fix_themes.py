import re
import os

files_to_fix = [
    "src/components/sections/TeamSection.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/sections/CTASection.tsx",
]

base_dir = "/Users/ayushdwivedy/Desktop/Under Development/Antigravity Projects/Business Webpage/skillpedia"

def fix_team(content):
    content = content.replace('bg-[#0B1F5E] dark:bg-[#071340] text-white', 'bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#071340] dark:via-[#0A194A] dark:to-[#071340] text-gray-900 dark:text-white')
    content = content.replace('via-white/15', 'via-gray-300 dark:via-white/15')
    content = content.replace('text-white/50', 'text-gray-500 dark:text-white/50')
    content = content.replace('from-[#071340]', 'from-white dark:from-[#071340]')
    content = content.replace('via-[#071340]/70', 'via-white/70 dark:via-[#071340]/70')
    content = content.replace('bg-white/10 backdrop-blur-xl border border-white/20 text-white/90', 'bg-blue-50 dark:bg-white/10 backdrop-blur-xl border border-blue-200 dark:border-white/20 text-blue-900 dark:text-white/90')
    content = content.replace('text-white/60', 'text-gray-600 dark:text-white/60')
    content = content.replace('text-white/55', 'text-gray-600 dark:text-white/55')
    
    # Text colors in cards
    content = content.replace('text-white"', 'text-gray-900 dark:text-white"')
    content = content.replace('bg-gradient-to-b from-[#FF7A00]/50 to-white/10', 'bg-gradient-to-b from-[#FF7A00]/50 to-gray-200 dark:to-white/10')
    content = content.replace('from-white/15 to-white/8', 'from-gray-300 dark:from-white/15 to-gray-200 dark:to-white/8')
    content = content.replace('bg-white/10', 'bg-gray-200 dark:bg-white/10')
    content = content.replace('bg-white/8', 'bg-gray-200 dark:bg-white/8')
    content = content.replace('from-white/12 to-white/5', 'from-gray-300 dark:from-white/12 to-gray-200 dark:to-white/5')
    content = content.replace('bg-white/6', 'bg-gray-200 dark:bg-white/6')
    
    # Background for CTA
    content = content.replace('bg-white/5 backdrop-blur-xl border border-white/10', 'bg-white shadow-xl dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10')
    
    # Card backgrounds
    content = content.replace('from-white/[0.06] to-white/[0.02]', 'from-white to-gray-50 dark:from-white/[0.06] dark:to-white/[0.02]')
    content = content.replace('hover:from-white/[0.10] hover:to-white/[0.04]', 'hover:from-gray-50 hover:to-gray-100 dark:hover:from-white/[0.10] dark:hover:to-white/[0.04]')
    content = content.replace('border-white/15', 'border-gray-200 dark:border-white/15')
    
    content = content.replace('from-white/[0.05] to-white/[0.02]', 'from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.02]')
    content = content.replace('hover:from-white/[0.09] hover:to-white/[0.03]', 'hover:from-gray-50 hover:to-gray-100 dark:hover:from-white/[0.09] dark:hover:to-white/[0.03]')
    content = content.replace('border-white/12', 'border-gray-200 dark:border-white/12')
    
    content = content.replace('bg-white/[0.04] hover:bg-white/[0.08]', 'bg-white hover:bg-gray-50 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]')
    content = content.replace('border-white/10 hover:border-white/20', 'border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20')
    
    content = content.replace('bg-white/[0.03] hover:bg-white/[0.07]', 'bg-white hover:bg-gray-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.07]')
    content = content.replace('border-white/8 hover:border-white/18', 'border-gray-200 hover:border-gray-300 dark:border-white/8 dark:hover:border-white/18')
    
    content = content.replace('text-white/80', 'text-gray-700 dark:text-white/80')
    return content

def fix_footer(content):
    content = content.replace('bg-[#071340]', 'bg-gray-50 dark:bg-[#071340]')
    content = content.replace('text-white/70', 'text-gray-600 dark:text-white/70')
    content = content.replace('text-white', 'text-gray-900 dark:text-white')
    content = content.replace('border-white/10', 'border-gray-200 dark:border-white/10')
    return content

for rel in files_to_fix:
    path = os.path.join(base_dir, rel)
    if not os.path.exists(path):
        continue
    with open(path, 'r') as f:
        content = f.read()
    
    if 'TeamSection' in path:
        content = fix_team(content)
    elif 'Footer' in path:
        content = fix_footer(content)
        
    with open(path, 'w') as f:
        f.write(content)

print("Files patched.")
