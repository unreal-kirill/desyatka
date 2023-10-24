const saveBtn = document.getElementById('save');
const chooseSaveBtn = document.getElementById('chooseSave');
const gentlemanBtn = document.getElementById('gentleman');
const aboutBtn = document.getElementById('about');

const saveModal = document.getElementById('saveModal');
const chooseSaveModal = document.getElementById('chooseSaveModal');
const gentlemanModal = document.getElementById('gentlemanModal');
const aboutModal = document.getElementById('aboutModal');

const closeSaveModal = document.getElementById('closeSaveModal');
const closeChooseSaveModal = document.getElementById('closeChooseSaveModal');
const closeGentlemanModal = document.getElementById('closeGentlemanModal');
const closeAboutModal = document.getElementById('closeAboutModal');

saveBtn.onclick = function() { saveModal.style.display = 'block'; };
chooseSaveBtn.onclick = function() { chooseSaveModal.style.display = 'block'; };
gentlemanBtn.onclick = function() { gentlemanModal.style.display = 'block'; };
aboutBtn.onclick = function() { aboutModal.style.display = 'block'; };

closeSaveModal.onclick = function() { saveModal.style.display = 'none'; };
closeChooseSaveModal.onclick = function() { chooseSaveModal.style.display = 'none'; };
closeGentlemanModal.onclick = function() { gentlemanModal.style.display = 'none'; };
closeAboutModal.onclick = function() { aboutModal.style.display = 'none'; };
