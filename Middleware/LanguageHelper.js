import getLangen from "../Languages/english";
import getLangtr from "../Languages/turkish";

const languages = {
    en: getLangen,
    tr: getLangtr,
};

export default function (language, message) {
    return languages[language][message];
}