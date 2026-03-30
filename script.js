let data = []:

fetch('taxonomy.json')
  .then(res => res.json())
  .then(json => data = json);
function search () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('results');
    results. Div.innerHTML = "";

    const matches = data.filter(item =>
        item.search_text.includes(query)
    );
    if (mathces.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";I
        return;
    }

    matches.slice(0,20).forEach(item => {
        const div = document.createElement('div');
        div.className = "result";
        div. innerHTML = `
          <h3>${item.scientific_name || "Unknown"}</h3>
          <p><strong>Closest Rank:</strong> ${item.closest_rank}</p>
          <p><strong>Kingdom:</strong> ${item.kingdom || ""}</p>
          <p><strong>Phylum:</strong> ${item.phylum || ""}</p>
          <p><strong>Class:</strong> ${item.class || ""}</p>
          <p><strong>Class:</strong> ${item.superorder || ""}</p>
          <p><strong>Order:</strong> ${item.order || ""}</p>
          <p><strong>Family:</strong> ${item.family || ""}</p>
          <p><strong>Genus:</strong> ${item.genus || ""}</p>
          <p><strong>Class:</strong> ${item.subgenus || ""}</p>
          <p><strong>Species:</strong> ${item.species || ""}</p>
          <p><strong>Class:</strong> ${item.accepted_as || ""}</p>
          <p><strong>Class:</strong> ${item.genus.sp || ""}</p>
          <p><strong>Class:</strong> ${item.genus_species || ""}</p>
          `;
    
          resultsDiv.appendChild(div);
    });
}
