var playlist = { artistName: "songTitle"}
function updatePlaylist (playlist,artistName,songTitle){
  playlist.song = 'artist';
  
}

function removeFromPlaylist (playlist,artistName){
   delete playlist.artistName
   return playlist
}