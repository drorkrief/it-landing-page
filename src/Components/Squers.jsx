import React from "react";

let data = [
  { header: "שירותי מחשוב", icon: "", description: "לחברתנו מוניטין רב שנים של מקצוענות בעבודה, טיפול אישי בכל לקוח ותודעת שירות גבוהה ביותר", link: "" },
  { header: "שירותי ענן", icon: "", description: "אנו מעסיקים עובדים בעלי הכשרות נדרשות ומקפידים על הדרכות מסודרות והתעדכנות בחידושים טכנולוגיים", link: "" },
  { header: "אבטחת מידע", icon: "", description: "אנחנו תמיד דרוכים וערוכים לטיפול בכל תקלה - בכל יום, בכל שעה ובכל זמן", link: "" },
  { header: "אחריות ואמינות", icon: "", description: "אנחנו עוסקים בשירותי מחשוב, אך עובדים עם אנשים. כוח האדם הוא המרכיב החשוב ביותר", link: "" },
];
export default function Squers() {
  return (
    <>
      <div className="squersWrapper">
        {data.map((squer) => (
          <div key={squer.header} className="squers">
            <h1>{squer.header}</h1>
            <h2>{squer.description}</h2>
          </div>
        ))}
      </div>
      ;
    </>
  );
}
