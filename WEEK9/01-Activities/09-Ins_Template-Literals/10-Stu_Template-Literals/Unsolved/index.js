// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: 'stop',
  artist: 'Spice Girls',
  album:  'Spiceworld',
 
};

const greeting = (name) => `Hello ${name}:`;

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = ` ${greeting('Aisha')} favourite song is ${music.title} by ${music.artist} from the album ${music.album}!!!`;

console.log(songSnippet)

