const itemData = {
  plank: { koTitle: "나무 판자", enTitle: "Oak Planks", koDesc: "원목 → 판자 4개", enDesc: "Wood Log → 4 Planks" },
  stick: { koTitle: "막대", enTitle: "Stick", koDesc: "판자 2개", enDesc: "2 Planks" },
  crafting_table: { koTitle: "제작대", enTitle: "Crafting Table", koDesc: "판자 4개", enDesc: "4 Planks" },
  furnace: { koTitle: "화로", enTitle: "Furnace", koDesc: "조약돌 8개", enDesc: "8 Cobblestone" },
  wood_pickaxe: { koTitle: "나무 곡괭이", enTitle: "Wooden Pickaxe", koDesc: "판자 3 + 막대 2", enDesc: "3 Planks + 2 Sticks" },
  stone_pickaxe: { koTitle: "돌 곡괭이", enTitle: "Stone Pickaxe", koDesc: "조약돌 3 + 막대 2", enDesc: "3 Cobblestone + 2 Sticks" },
  iron_pickaxe: { koTitle: "철 곡괭이", enTitle: "Iron Pickaxe", koDesc: "철 3 + 막대 2", enDesc: "3 Iron Ingots + 2 Sticks" },
  diamond_pickaxe: { koTitle: "다이아 곡괭이", enTitle: "Diamond Pickaxe", koDesc: "다이아 3 + 막대 2", enDesc: "3 Diamonds + 2 Sticks" },
  netherite_pickaxe: { koTitle: "네더라이트 곡괭이", enTitle: "Netherite Pickaxe", koDesc: "네더라이트 3 + 막대 2", enDesc: "3 Netherite Ingots + 2 Sticks" },
  wood_sword: { koTitle: "나무 검", enTitle: "Wooden Sword", koDesc: "판자 2 + 막대 1", enDesc: "2 Planks + 1 Stick" },
  stone_sword: { koTitle: "돌 검", enTitle: "Stone Sword", koDesc: "조약돌 2 + 막대 1", enDesc: "2 Cobblestone + 1 Stick" },
  iron_sword: { koTitle: "철 검", enTitle: "Iron Sword", koDesc: "철 2 + 막대 1", enDesc: "2 Iron Ingots + 1 Stick" },
  diamond_sword: { koTitle: "다이아 검", enTitle: "Diamond Sword", koDesc: "다이아 2 + 막대 1", enDesc: "2 Diamonds + 1 Stick" },
  netherite_sword: { koTitle: "네더라이트 검", enTitle: "Netherite Sword", koDesc: "네더라이트 2 + 막대 1", enDesc: "2 Netherite Ingots + 1 Stick" },
  bow: { koTitle: "활", enTitle: "Bow", koDesc: "막대 + 실", enDesc: "Sticks + String" },
  arrow: { koTitle: "화살", enTitle: "Arrow", koDesc: "부싯돌 + 막대 + 깃털", enDesc: "Flint + Stick + Feather" },
  shield: { koTitle: "방패", enTitle: "Shield", koDesc: "철 + 판자", enDesc: "Iron Ingot + Planks" },
  torch: { koTitle: "횃불", enTitle: "Torch", koDesc: "석탄 + 막대", enDesc: "Coal + Stick" },
  chest: { koTitle: "상자", enTitle: "Chest", koDesc: "판자 8개", enDesc: "8 Planks" },
  bed: { koTitle: "침대", enTitle: "Bed", koDesc: "양털 3 + 판자 3", enDesc: "3 Wool + 3 Planks" },
  bucket: { koTitle: "양동이", enTitle: "Bucket", koDesc: "철 3개", enDesc: "3 Iron Ingots" },
  compass: { koTitle: "나침반", enTitle: "Compass", koDesc: "철 + 레드스톤", enDesc: "Iron Ingot + Redstone" },
  clock: { koTitle: "시계", enTitle: "Clock", koDesc: "금 + 레드스톤", enDesc: "Gold Ingot + Redstone" },
  book: { koTitle: "책", enTitle: "Book", koDesc: "종이 + 가죽", enDesc: "Paper + Leather" },
  enchantment_table: { koTitle: "인챈트 테이블", enTitle: "Enchanting Table", koDesc: "다이아 + 책 + 옵시디언", enDesc: "Diamonds + Book + Obsidian" }
};

const mobData = {
  zombie: { koTitle: "좀비", enTitle: "Zombie", koDesc: "근접 공격 / 뒤로 이동하며 처리", enDesc: "Melee attack / Move back to defeat" },
  creeper: { koTitle: "크리퍼", enTitle: "Creeper", koDesc: "폭발 / 거리 유지 필수", enDesc: "Explosion / Keep distance" },
  skeleton: { koTitle: "스켈레톤", enTitle: "Skeleton", koDesc: "활 공격 / 움직이며 회피", enDesc: "Bow attack / Dodge by moving" },
  spider: { koTitle: "거미", enTitle: "Spider", koDesc: "벽 타기 / 야간 위험", enDesc: "Climbs walls / Dangerous at night" },
  slime: { koTitle: "슬라임", enTitle: "Slime", koDesc: "분열 / 근접 주의", enDesc: "Splits / Caution in melee" },
  witch: { koTitle: "마녀", enTitle: "Witch", koDesc: "포션 공격 / 빠르게 제거", enDesc: "Potion attack / Eliminate quickly" },
  blaze: { koTitle: "블레이즈", enTitle: "Blaze", koDesc: "화염 공격 / 활 추천", enDesc: "Fire attack / Bow recommended" },
  ghast: { koTitle: "가스트", enTitle: "Ghast", koDesc: "폭발 화염탄 / 반사 가능", enDesc: "Explosive fireballs / Can be deflected" },
  magma_cube: { koTitle: "마그마 큐브", enTitle: "Magma Cube", koDesc: "분열 + 점프", enDesc: "Splits / Jumps" },
  wither_skeleton: { koTitle: "위더 스켈레톤", enTitle: "Wither Skeleton", koDesc: "위더 효과 / 방패 필수", enDesc: "Wither effect / Shield required" },
  piglin: { koTitle: "피글린", enTitle: "Piglin", koDesc: "금에 반응 / 중립적", enDesc: "Reacts to gold / Neutral" },
  hoglin: { koTitle: "호글린", enTitle: "Hoglin", koDesc: "강한 근접 공격", enDesc: "Strong melee attack" },
  enderman: { koTitle: "엔더맨", enTitle: "Enderman", koDesc: "순간이동 / 눈 마주치지 말 것", enDesc: "Teleports / Do not look in the eyes" },
  shulker: { koTitle: "셜커", enTitle: "Shulker", koDesc: "부유 + 발사 공격", enDesc: "Levitation + Projectile attack" },
  dragon: { koTitle: "엔더 드래곤", enTitle: "Ender Dragon", koDesc: "최종 보스 / 수정 파괴 필수", enDesc: "Final Boss / Destroy crystals first" },
  cow: { koTitle: "소", enTitle: "Cow", koDesc: "가죽 + 고기", enDesc: "Leather + Meat" },
  pig: { koTitle: "돼지", enTitle: "Pig", koDesc: "식량", enDesc: "Food" },
  sheep: { koTitle: "양", enTitle: "Sheep", koDesc: "양털", enDesc: "Wool" },
  chicken: { koTitle: "닭", enTitle: "Chicken", koDesc: "깃털 + 식량", enDesc: "Feathers + Food" }
};

let currentLang = 'ko';

function setLanguage(lang) {
  currentLang = lang;
  
  const elements = document.querySelectorAll('.tr');
  elements.forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  
  document.getElementById('itemSearchInput').placeholder = document.getElementById('itemSearchInput').getAttribute('data-' + lang);
  document.getElementById('mobSearchInput').placeholder = document.getElementById('mobSearchInput').getAttribute('data-' + lang);

  renderItems();
  renderMobs();
  
  document.getElementById('langMenu').classList.remove('show');
}

function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('show');
}

window.onclick = function(e){
  if(e.target.id === "modal"){
    closeModal();
  }
  if(!e.target.matches('.lang-btn')) {
    const dropdowns = document.getElementsByClassName("lang-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}

function renderItems(){
  const container = document.getElementById("itemContainer");
  container.innerHTML = "";

  for(let key in itemData){
    const cardTitle = currentLang === 'ko' ? itemData[key].koTitle : itemData[key].enTitle;
    
    const searchText = document.getElementById('itemSearchInput').value.toLowerCase();
    if(searchText && !cardTitle.toLowerCase().includes(searchText)) {
      continue;
    }

    const div = document.createElement("div");
    div.className = "card";
    div.innerText = cardTitle;
    div.onclick = () => showItem(key);
    container.appendChild(div);
  }
}

function renderMobs(){
  const container = document.getElementById("mobContainer");
  container.innerHTML = "";

  for(let key in mobData){
    const cardTitle = currentLang === 'ko' ? mobData[key].koTitle : mobData[key].enTitle;
    
    const searchText = document.getElementById('mobSearchInput').value.toLowerCase();
    if(searchText && !cardTitle.toLowerCase().includes(searchText)) {
      continue;
    }

    const div = document.createElement("div");
    div.className = "card";
    div.innerText = cardTitle;
    div.onclick = () => showMob(key);
    container.appendChild(div);
  }
}

function searchItems() {
  renderItems();
}

function searchMobs() {
  renderMobs();
}

function showItem(key){
  const title = currentLang === 'ko' ? itemData[key].koTitle : itemData[key].enTitle;
  const content = currentLang === 'ko' ? itemData[key].koDesc : itemData[key].enDesc;
  openModal(title, content);
}

function showMob(key){
  const title = currentLang === 'ko' ? mobData[key].koTitle : mobData[key].enTitle;
  const content = currentLang === 'ko' ? mobData[key].koDesc : mobData[key].enDesc;
  openModal(title, content);
}

function openModal(title, content){
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalContent").innerText = content;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

renderItems();
renderMobs();