import i18n from "i18next";

const LanguageSwitcher = () => {
  return (
    <select
      className="p-2 rounded"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ta">தமிழ்</option>
      <option value="ma">Malaiyalam</option>
      <option value="ka">Kannadam</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSwitcher;
