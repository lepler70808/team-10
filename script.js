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
  
  wood_shovel: { koTitle: "나무 삽", enTitle: "Wooden Shovel", koDesc: "판자 1 + 막대 2", enDesc: "1 Plank + 2 Sticks" },
  stone_shovel: { koTitle: "돌 삽", enTitle: "Stone Shovel", koDesc: "조약돌 1 + 막대 2", enDesc: "1 Cobblestone + 2 Sticks" },
  iron_shovel: { koTitle: "철 삽", enTitle: "Iron Shovel", koDesc: "철 1 + 막대 2", enDesc: "1 Iron Ingot + 2 Sticks" },
  diamond_shovel: { koTitle: "다이아몬드 삽", enTitle: "Diamond Shovel", koDesc: "다이아 1 + 막대 2", enDesc: "1 Diamond + 2 Sticks" },
  netherite_shovel: { koTitle: "네더라이트 삽", enTitle: "Netherite Shovel", koDesc: "네더라이트 1 + 막대 2", enDesc: "1 Netherite Ingot + 2 Sticks" },

  wood_axe: { koTitle: "나무 도끼", enTitle: "Wooden Axe", koDesc: "판자 3 + 막대 2", enDesc: "3 Planks + 2 Sticks" },
  stone_axe: { koTitle: "돌 도끼", enTitle: "Stone Axe", koDesc: "조약돌 3 + 막대 2", enDesc: "3 Cobblestone + 2 Sticks" },
  iron_axe: { koTitle: "철 도끼", enTitle: "Iron Axe", koDesc: "철 3 + 막대 2", enDesc: "3 Iron Ingots + 2 Sticks" },
  diamond_axe: { koTitle: "다이아몬드 도끼", enTitle: "Diamond Axe", koDesc: "다이아 3 + 막대 2", enDesc: "3 Diamonds + 2 Sticks" },
  netherite_axe: { koTitle: "네더라이트 도끼", enTitle: "Netherite Axe", koDesc: "네더라이트 3 + 막대 2", enDesc: "3 Netherite Ingots + 2 Sticks" },

  wood_hoe: { koTitle: "나무 괭이", enTitle: "Wooden Hoe", koDesc: "판자 2 + 막대 2", enDesc: "2 Planks + 2 Sticks" },
  stone_hoe: { koTitle: "돌 괭이", enTitle: "Stone Hoe", koDesc: "조약돌 2 + 막대 2", enDesc: "2 Cobblestone + 2 Sticks" },
  iron_hoe: { koTitle: "철 괭이", enTitle: "Iron Hoe", koDesc: "철 2 + 막대 2", enDesc: "2 Iron Ingots + 2 Sticks" },
  diamond_hoe: { koTitle: "다이아몬드 괭이", enTitle: "Diamond Hoe", koDesc: "다이아 2 + 막대 2", enDesc: "2 Diamonds + 2 Sticks" },
  netherite_hoe: { koTitle: "네더라이트 괭이", enTitle: "Netherite Hoe", koDesc: "네더라이트 2 + 막대 2", enDesc: "2 Netherite Ingots + 2 Sticks" },

  iron_helmet: { koTitle: "철 투구", enTitle: "Iron Helmet", koDesc: "철 주괴 5개", enDesc: "5 Iron Ingots" },
  iron_chestplate: { koTitle: "철 흉갑", enTitle: "Iron Chestplate", koDesc: "철 주괴 8개", enDesc: "8 Iron Ingots" },
  iron_leggings: { koTitle: "철 레깅스", enTitle: "Iron Leggings", koDesc: "철 주괴 7개", enDesc: "7 Iron Ingots" },
  iron_boots: { koTitle: "철 부츠", enTitle: "Iron Boots", koDesc: "철 주괴 4개", enDesc: "4 Iron Ingots" },

  diamond_helmet: { koTitle: "다이아몬드 투구", enTitle: "Diamond Helmet", koDesc: "다이아몬드 5개", enDesc: "5 Diamonds" },
  diamond_chestplate: { koTitle: "다이아몬드 흉갑", enTitle: "Diamond Chestplate", koDesc: "다이아몬드 8개", enDesc: "8 Diamonds" },
  diamond_leggings: { koTitle: "다이아몬드 레깅스", enTitle: "Diamond Leggings", koDesc: "다이아몬드 7개", enDesc: "7 Diamonds" },
  diamond_boots: { koTitle: "다이아몬드 부츠", enTitle: "Diamond Boots", koDesc: "다이아몬드 4개", enDesc: "4 Diamonds" },

  bow: { koTitle: "활", enTitle: "Bow", koDesc: "막대 + 실", enDesc: "Sticks + String" },
  arrow: { koTitle: "화살", enTitle: "Arrow", koDesc: "부싯돌 + 막대 + 깃털", enDesc: "Flint + Stick + Feather" },
  shield: { koTitle: "방패", enTitle: "Shield", koDesc: "철 + 판자", enDesc: "Iron Ingot + Planks" },
  torch: { koTitle: "횃불", enTitle: "Torch", koDesc: "석탄 + 막대", enDesc: "Coal + Stick" },
  chest: { koTitle: "상자", enTitle: "Chest", koDesc: "판자 8개", enDesc: "8 Planks" },
  bed: { koTitle: "침대", enTitle: "Bed", koDesc: "양털 3 + 판자 3", enDesc: "3 Wool + 3 Planks" },
  bucket: { koTitle: "양동이", enTitle: "Bucket", koDesc: "철 3개", enDesc: "3 Iron Ingots" },
  
  flint_and_steel: { koTitle: "부싯돌과 부싯깃", enTitle: "Flint and Steel", koDesc: "철 + 부싯돌", enDesc: "Iron Ingot + Flint" },
  shears: { koTitle: "가위", enTitle: "Shears", koDesc: "철 2개", enDesc: "2 Iron Ingots" },
  fishing_rod: { koTitle: "낚싯대", enTitle: "Fishing Rod", koDesc: "막대 3 + 실 2", enDesc: "3 Sticks + 2 Strings" },
  carrot_on_a_stick: { koTitle: "당근 낚싯대", enTitle: "Carrot on a Stick", koDesc: "낚싯대 + 낚인 당근", enDesc: "Fishing Rod + Carrot" },
  warped_fungus_on_a_stick: { koTitle: "뒤틀린 균 낚싯대", enTitle: "Warped Fungus on a Stick", koDesc: "낚싯대 + 뒤틀린 균", enDesc: "Fishing Rod + Warped Fungus" },
  lead: { koTitle: "끈", enTitle: "Lead", koDesc: "실 4 + 슬라임볼", enDesc: "4 Strings + Slimeball" },
  name_tag: { koTitle: "이름표", enTitle: "Name Tag", koDesc: "종이 1 + 철사 줄", enDesc: "Paper + Iron Block/Ingots" },
  golden_apple: { koTitle: "황금 사과", enTitle: "Golden Apple", koDesc: "사과 + 금괴 8개", enDesc: "Apple + 8 Gold Ingots" },
  enchanted_golden_apple: { koTitle: "마법이 부여된 황금 사과", enTitle: "Enchanted Golden Apple", koDesc: "사과 + 금 블록 8개", enDesc: "Apple + 8 Gold Blocks" },
  totem_of_undying: { koTitle: "불사의 토템", enTitle: "Totem of Undying", koDesc: "소환사 처치 시 획득", enDesc: "Drop from Evoker" },
  elytra: { koTitle: "엘리트라", enTitle: "Elytra", koDesc: "엔더 도시에서 획득", enDesc: "Found in End Cities" }
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
let itemLimit = 12;

function setLanguage(lang) {
  currentLang = lang;
  
  const elements = document.querySelectorAll('.tr');
  elements.forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  
  document.getElementById('itemSearchInput').placeholder = document.getElementById('itemSearchInput').getAttribute('data-' + lang);
  document.getElementById('mobSearchInput').placeholder = document.getElementById('mobSearchInput').getAttribute('data-' + lang);
  document.getElementById('loadMoreBtn').innerHTML = document.getElementById('loadMoreBtn').getAttribute('data-' + lang);

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

  let displayedCount = 0;
  for(let key in itemData){
    const cardTitle = currentLang === 'ko' ? itemData[key].koTitle : itemData[key].enTitle;
    const searchText = document.getElementById('itemSearchInput').value.toLowerCase();
    
    if(searchText && !cardTitle.toLowerCase().includes(searchText)) {
      continue;
    }

    displayedCount++;
    if (!searchText && displayedCount > itemLimit) {
      continue;
    }

    const div = document.createElement("div");
    div.className = "card";
    div.innerText = cardTitle;
    div.onclick = () => showItem(key);
    container.appendChild(div);
  }

  const moreBtn = document.getElementById("loadMoreBtn");
  const searchText = document.getElementById('itemSearchInput').value.toLowerCase();
  
  if (!searchText && displayedCount > itemLimit) {
    moreBtn.style.display = "inline-block";
  } else {
    moreBtn.style.display = "none";
  }
}

function loadMoreItems() {
  itemLimit += 12;
  renderItems();
}

function searchItems() {
  renderItems();
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

// 초기화 실행
renderItems();
renderMobs();