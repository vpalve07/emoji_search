import React, { useState } from 'react';
import './EmojiSearch.css';

const emojis = [
  { id: 1, emoji: '😀', name: 'Grinning Face' },
  { id: 2, emoji: '😂', name: 'Face with Tears of Joy' },
  { id: 3, emoji: '😍', name: 'Smiling Face with Heart-Eyes' },
  { id: 4, emoji: '🤔', name: 'Thinking Face' },
  { id: 5, emoji: '😎', name: 'Smiling Face with Sunglasses' },
  { id: 6, emoji: '😇', name: 'Smiling Face with Halo' },
  { id: 7, emoji: '🤗', name: 'Hugging Face' },
  { id: 8, emoji: '🤫', name: 'Shushing Face' },
  { id: 9, emoji: '🤯', name: 'Exploding Head' },
  { id: 10, emoji: '🥳', name: 'Partying Face' },
  { id: 11, emoji: '😊', name: 'Smiling Face with Smiling Eyes' },
  { id: 12, emoji: '😌', name: 'Relieved Face' },
  { id: 13, emoji: '😒', name: 'Unamused Face' },
  { id: 14, emoji: '😔', name: 'Pensive Face' },
  { id: 15, emoji: '😕', name: 'Confused Face' },
  { id: 16, emoji: '😖', name: 'Confounded Face' },
  { id: 17, emoji: '😗', name: 'Kissing Face' },
  { id: 18, emoji: '😘', name: 'Face Blowing a Kiss' },
  { id: 19, emoji: '😙', name: 'Kissing Face with Smiling Eyes' },
  { id: 20, emoji: '😚', name: 'Kissing Face with Closed Eyes' },
  { id: 21, emoji: '😜', name: 'Face with Stuck-Out Tongue and Winking Eye' },
  { id: 22, emoji: '😝', name: 'Face with Stuck-Out Tongue and Tightly-Closed Eyes' },
  { id: 23, emoji: '😞', name: 'Disappointed Face' },
  { id: 24, emoji: '😟', name: 'Worried Face' },
  { id: 25, emoji: '😠', name: 'Angry Face' },
  { id: 26, emoji: '😡', name: 'Pouting Face' },
  { id: 27, emoji: '😢', name: 'Crying Face' },
  { id: 28, emoji: '😣', name: 'Persevering Face' },
  { id: 29, emoji: '😤', name: 'Face with Steam From Nose' },
  { id: 30, emoji: '😥', name: 'Disappointed but Relieved Face' },
  { id: 31, emoji: '😦', name: 'Frowning Face with Open Mouth' },
  { id: 32, emoji: '😧', name: 'Anguished Face' },
  { id: 33, emoji: '😨', name: 'Fearful Face' },
  { id: 34, emoji: '😩', name: 'Weary Face' },
  { id: 35, emoji: '😪', name: 'Sleepy Face' },
  { id: 36, emoji: '😫', name: 'Tired Face' },
  { id: 37, emoji: '😬', name: 'Grimacing Face' },
  { id: 38, emoji: '😭', name: 'Loudly Crying Face' },
  { id: 39, emoji: '😮', name: 'Face with Open Mouth' },
  { id: 40, emoji: '😯', name: 'Hushed Face' },
  { id: 41, emoji: '😰', name: 'Face with Open Mouth and Cold Sweat' },
  { id: 42, emoji: '😱', name: 'Face Screaming in Fear' },
  { id: 43, emoji: '😲', name: 'Astonished Face' },
  { id: 44, emoji: '😳', name: 'Flushed Face' },
  { id: 45, emoji: '🤩', name: 'Star-Struck' },
  { id: 46, emoji: '🥺', name: 'Pleading Face' },
  { id: 47, emoji: '🤢', name: 'Nauseated Face' },
  { id: 48, emoji: '🤮', name: 'Face Vomiting' },
  { id: 49, emoji: '🥰', name: 'Smiling Face with Hearts' },
  { id: 50, emoji: '🤯', name: 'Exploding Head' },
  { id: 51, emoji: '🥴', name: 'Woozy Face' },
  { id: 52, emoji: '🤭', name: 'Face with Hand Over Mouth' },
  { id: 53, emoji: '🥳', name: 'Partying Face' },
  { id: 54, emoji: '🤫', name: 'Shushing Face' },
  { id: 55, emoji: '🤡', name: 'Clown Face' },
  { id: 56, emoji: '🥶', name: 'Cold Face' },
  { id: 57, emoji: '🥵', name: 'Hot Face' },
  { id: 58, emoji: '🥺', name: 'Pleading Face' },
  { id: 59, emoji: '🤯', name: 'Exploding Head' },
  { id: 60, emoji: '🥴', name: 'Woozy Face' },
  { id: 61, emoji: '🤪', name: 'Zany Face' },
  { id: 62, emoji: '🤬', name: 'Face with Symbols on Mouth' },
  { id: 63, emoji: '🤗', name: 'Hugging Face' },
  { id: 64, emoji: '🥷', name: 'Ninja' },
  { id: 65, emoji: '🦷', name: 'Tooth' },
  { id: 67, emoji: '🫁', name: 'Lungs' },
  { id: 68, emoji: '🫀', name: 'Anatomical Heart' },
  { id: 69, emoji: '🩸', name: 'Drop of Blood' },
  { id: 70, emoji: '🦵', name: 'Leg' },
  { id: 71, emoji: '🦶', name: 'Foot' },
  { id: 72, emoji: '🦴', name: 'Bone' },
  { id: 73, emoji: '🦾', name: 'Mechanical Arm' },
  { id: 74, emoji: '🦿', name: 'Mechanical Leg' },
  { id: 75, emoji: '👨‍❤️‍👨', name: 'Couple with Heart: Man, Man' },
  { id: 76, emoji: '👩‍❤️‍👩', name: 'Couple with Heart: Woman, Woman' },
  { id: 77, emoji: '👨‍👩‍👦', name: 'Family: Man, Woman, Boy' },
  { id: 78, emoji: '👨‍👩‍👧', name: 'Family: Man, Woman, Girl' },
  { id: 79, emoji: '👨‍👩‍👧‍👦', name: 'Family: Man, Woman, Girl, Boy' },
  { id: 80, emoji: '👨‍👩‍👦‍👦', name: 'Family: Man, Woman, Boy, Boy' },
  { id: 81, emoji: '👨‍👩‍👧‍👧', name: 'Family: Man, Woman, Girl, Girl' },
  { id: 82, emoji: '💑', name: 'Couple With Heart' },
  { id: 83, emoji: '🏋️‍♂️', name: 'Man Lifting Weights' },
  { id: 84, emoji: '🐒', name: 'Monkey' },
  { id: 85, emoji: '🦍', name: 'Gorilla' },
  { id: 86, emoji: '👋', name: 'Waving Hand' },
  { id: 87, emoji: '👏', name: 'Clapping Hands' },
  { id: 88, emoji: '🙌', name: 'Raising Hands' },
  { id: 89, emoji: '👐', name: 'Open Hands' },
  { id: 90, emoji: '🤲', name: 'Palms Up Together' },
  { id: 91, emoji: '🤝', name: 'Handshake' },
  { id: 92, emoji: '🙏', name: 'Folded Hands' },
  { id: 93, emoji: '✋', name: 'Raised Hand' },
  { id: 94, emoji: '🤚', name: 'Raised Back of Hand' },
  { id: 95, emoji: '🖐️', name: 'Hand with Fingers Splayed' },
  { id: 96, emoji: '🤟', name: 'Love-You Gesture' },
  { id: 97, emoji: '🖕', name: 'Middle Finger' },
  { id: 98, emoji: '🤑', name: 'Money-Head' },
  { id: 99, emoji: '🥳', name: 'Face with Party Horn and Party Hat' },
  { id: 100, emoji: '💯', name: '100' },
];

const EmojiSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleSearchInputChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);

    const filtered = emojis.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseSearchText = newSearchText.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchText);
    });

    setFilteredEmojis(filtered);
  };

  return (
    <div className="emoji-search">
      <h1 className="emoji-search__title">Emoji Search</h1>
      <input className="emoji-search__input" type="text" value={searchText} onChange={handleSearchInputChange} />
      <ul className="emoji-search__list">
        {filteredEmojis.map(({ id, emoji, name }) => (
          <li key={id} className="emoji-search__item">
            <span className="emoji-search__emoji">{emoji}</span>
            <span className="emoji-search__name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
