// ------------------------------
// MAIN.JS — CLEAN + MERGED VERSION
// ------------------------------

// Grab UI elements
const searchInput = document.getElementById("system-search");
const suggestionsBox = document.getElementById("search-suggestions");
const searchSection = document.getElementById("search-section");

const diagramCanvas = document.getElementById("system-diagram-canvas");
const summaryContent = document.getElementById("system-summary-content");
const openEntryBtn = document.getElementById("open-entry-btn");


// ------------------------------
// 1. Predictive Search Logic
// ------------------------------

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const normalizedQuery = query.replace(/\s+/g, "");

  if (normalizedQuery === "") {
    hideSuggestions();
    return;
  }

  // Match against internal keys
  const matches = Object.keys(systems).filter(key =>
    key.toLowerCase().includes(normalizedQuery)
  );

  if (matches.length === 0) {
    hideSuggestions();
    return;
  }

  // Build suggestion list
  suggestionsBox.innerHTML = "";
  matches.forEach(key => {
    const item = document.createElement("div");
    item.className = "suggestion-item";

    // Display pretty name
    item.textContent = systems[key].name;

    item.addEventListener("click", () => {
      console.log("Suggestion clicked:", key);
      selectSystem(key);
      searchInput.value = systems[key].name;
      hideSuggestions();
    });

    suggestionsBox.appendChild(item);
  });

  showSuggestions();
});


// Hide suggestions when clicking anywhere outside the search section
document.addEventListener("click", (e) => {
  if (!searchSection.contains(e.target)) {
    hideSuggestions();
  }
});

function showSuggestions() {
  suggestionsBox.style.display = "block";
  suggestionsBox.style.pointerEvents = "auto";
}

function hideSuggestions() {
  suggestionsBox.style.display = "none";
  suggestionsBox.style.pointerEvents = "none";
}



// ------------------------------
// 2. System Selection Logic
// ------------------------------

function selectSystem(key) {
  console.log("selectSystem START:", key);




  const data = systems[key];
  
    // 🔍 Add this debug line right here:
  console.log("RAW LAYOUT VALUE:", data.layout);
  console.log("CHAR CODES:", [...data.layout].map(c => c.charCodeAt(0)));
  console.log("FORMAT OUTPUT:", formatRender(data.layout));

  
  
  if (!data) {
    console.warn("No system data for:", key);
    return;
  }

  // Update left panel (system layout)
diagramCanvas.innerHTML = `
  <div><strong>System:</strong> ${data.name}</div>
  <div><strong>Layout:</strong> ${formatRender(data.layout)}</div>
`;


  // Update right panel (summary)
  summaryContent.innerHTML = `
    <strong>${data.name} — ${data.summary.region}</strong><br><br>

    <strong>Inhabited Worlds:</strong>
    ${(data.summary.inhabited || []).join(", ")}<br><br>

    <strong>Notes:</strong>
    <ul>
      ${(data.summary.notes || []).map(n => `<li>${n}</li>`).join("")}
    </ul>
  `;

  // Enable the button
  openEntryBtn.disabled = false;

  // Assign click handler
  openEntryBtn.onclick = () => {
    console.log("BUTTON CLICKED:", data);

    if (data.type === "corridor") {
      window.location.href = "corridor.html"; // adjust if needed
      return;
    }

    if (data.fullEntry) {
      window.location.href = data.fullEntry;
      return;
    }

    alert("Full entry page not available.");
  };
}



// ------------------------------
// 3. Tooltip Logic (unchanged)
// ------------------------------

const tooltip = document.getElementById("tooltip");

document.addEventListener("mouseover", e => {
  if (e.target.classList.contains("class-letter")) {
    tooltip.textContent = e.target.dataset.tip;
    tooltip.style.opacity = 1;
  }
});

document.addEventListener("mousemove", e => {
  tooltip.style.left = e.pageX + 12 + "px";
  tooltip.style.top = e.pageY + 12 + "px";
});

document.addEventListener("mouseout", e => {
  if (e.target.classList.contains("class-letter")) {
    tooltip.style.opacity = 0;
  }
});



// ------------------------------
// 4. Utility
// ------------------------------

function formatLayout(layout) {
  return layout || "No layout available.";
}

//--------------------------------
// 5. MAP INTERFACE — INLINE SVG VERSION
//--------------------------------

function setupMap() {
    const svg = document.getElementById("tempes-map");
    const viewport = document.getElementById("map-viewport");
    console.log("Inline SVG found:", svg);

    let scale = 1;
    let pos = { x: 0, y: 0 };
    let isPanning = false;
    let start = { x: 0, y: 0 };


    // The wrapper is what gets transformed
    viewport.style.transformOrigin = "50% 50%";

    // Zoom
    svg.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(0.5, scale + delta), 5);

        viewport.style.transform =
            `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
    }, { passive: false });

    // Pan start
    svg.addEventListener('mousedown', (e) => {
        isPanning = true;
        start = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    });

    // Pan move
    svg.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        pos = { x: e.clientX - start.x, y: e.clientY - start.y };

        viewport.style.transform =
            `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
    });

    // Pan end
    svg.addEventListener('mouseup', () => isPanning = false);
    svg.addEventListener('mouseleave', () => isPanning = false);
}

window.onload = () => {
    setupMap();
};

// ------------------------------
// 5. Map Click Handling
// ------------------------------


const map = document.getElementById("tempes-map");

if (map) {
  map.addEventListener("click", e => {

    // SYSTEM CLICK
    const system = e.target.closest(".system-node") 
                || e.target.parentElement?.closest(".system-node");

    if (system) {
      const key = system.id;
      highlightSystem(key);
      selectSystem(key);
      return;
    }

// CORRIDOR CLICK
const corridor = e.target.closest(".corridor-node");
if (corridor) {
  const key = corridor.id;
  highlightCorridor(key);
  selectSystem(key);   // <-- THIS is the correct call
  return;
}
  });
}

function selectCorridor(id) {
  console.log("Corridor selected:", id);
  // TODO: load corridor summary panel here
}


function highlightSystem(id) {
  document.querySelectorAll('.system-node').forEach(n => {
    n.classList.remove('selected');
  });
  const node = document.getElementById(id);
  if (node) node.classList.add('selected');
}
function highlightCorridor(id) {
  document.querySelectorAll('.corridor-node').forEach(n => {
    n.classList.remove('selected');
  });
  const node = document.getElementById(id);
  if (node) node.classList.add('selected');
}
