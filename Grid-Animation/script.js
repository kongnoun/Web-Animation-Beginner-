document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  // Define parent first
  const parent = document.getElementById("parent-ct");

  if (!parent) {
    console.error("Element with ID 'parent-ct' not found.");
    return; // Stop execution if parent doesn't exist
  }

  const gridAmount = () => {
    for (let i = 0; i < 10; i++) {
      const child = document.createElement("div");
      child.classList.add("grid-child"); // ✅ Fixed classList typo
      parent.appendChild(child);
    }
  };

  const calculateOffset = (event) => {
    const rect = parent.getBoundingClientRect();
    return {
      x: event.clientX - rect.left + 10, // ✅ Added small offset
      y: event.clientY - rect.top + 10,
      rect
    };
  };

  console.table({ parent, gridAmount, calculateOffset }); // ✅ Logging correctly

  // Call the function to create the grid
  gridAmount();
});
