const subjects = [
'favorite character',
'myhtological creature',
'carnivore',
'herbivore',
'bird',
'vehicle',
'ship',
'weapon',
'musical instrument',
'historic event',
'insect',
'modern invention',
'magical artifact',
'everyday tool',
'plant',
'monster'
]

const times = [
    'prehistoric',
    'ancient',
    'medieval',
    'modern',
    'contemporary',
    'futuristic',
    'fantasy',
]

const settings = [
    'school',
    'airport',
    'junkyard',
    'animal shelter',
    'laboratory',
    'museum',
    'aquarium',
    'sports facility',
    'basement',
    'beach setting',
    'beauty salon',
    'hospital',
    'hotel',
    'bookstore',
    'garden',
    'place of worship',
    'castle',
    'casino',
    'cave',
    'cemetery',
    'circus',
    'city',
    'village',
    'coffee house',
    'fairground',
    'mansion',
    'camp',
    'factory',
    'observatory',
    'palace',
    'park',
    'prison',
    'law enforcement facility',
    'previously undiscovered island',
    'previously undiscovered planet',
    'rainforest',
    'sewer',
    'shopping area',
    'theater',
    'station',
    'forest',
    'zoo'
]

const moods = [
    'cheerful',
    'reflective',
    'gloomy',
    'humorous',
    'melancholy',
    'idyllic',
    'whimsical',
    'romantic',
    'mysterious',
    'ominous',
    'calm',
    'lighthearted',
    'hopeful',
    'angry',
    'fearful',
    'tense',
    'lonely'
]

//generates a random number in a range
function rand(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

//generates a random list item
function get_random_list_item (list) {
    return item = list[rand(0,list.length)];
}

//generates a random hsl color
function get_random_color() {
    const h = rand(1, 360);
    const s = rand(0, 100);
    const l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

//generates a list of a certain number of random hsl colors
function generate_multiple_colors(number){
    let listOfColors=[];
    for(let i=0;i<number;i++){
        listOfColors.push(get_random_color());
    }
    return listOfColors;
}

//genretates the correct indefinite article based on the first letter of a word
function get_the_article(word){
    let char = word[0];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return 'an'
    } else {
        return 'a'
    }
}

function generate_message(){
    //generates prompt colors and words
    const listOfColors=generate_multiple_colors(3).join('\n');
    const subject=get_random_list_item(subjects);
    const time=get_random_list_item(times);
    const setting=get_random_list_item(settings);
    const mood=get_random_list_item(moods);
    //generates articles
    const articleBeforeSubject=get_the_article(subject);
    const articleBeforeTime=get_the_article(time);
    const articleBeforeMood=get_the_article(mood);
    //composes the prompt
    return `Draw ${articleBeforeMood} ${mood} picture of ${articleBeforeSubject} ${subject} in ${articleBeforeTime} ${time} ${setting}. \nUse these colors: \n${listOfColors}`
}

console.log(generate_message());