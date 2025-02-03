import './leftDiv.css';
import { Image, Eraser, ScrollText, X } from 'lucide-react';
import { useState } from 'react';

const LeftDiv = () => {
  const [tabSelected, setTabSelected] = useState(1);
  const [showRegPopup, setShowRegPopup] = useState(false);
  return (
    <div className="left_div">
      <div className="tabs_cont">
        <div
          className={`no_bg ${tabSelected === 1 ? 'tab_selected' : ''}`}
          onClick={() => setTabSelected(1)}
        >
          ללא רקע
          <Eraser />
        </div>
        <div
          className={`original ${tabSelected === 2 ? 'tab_selected' : ''}`}
          onClick={() => setTabSelected(2)}
        >
          מקורי
          <Image />
        </div>
      </div>
      <div className="left_div_inner"></div>
      <div className="footer">
        <button className="regulation" onClick={() => setShowRegPopup(true)}>
          <ScrollText size={17} /> תקנון החברה
        </button>
        <div className="legacy">
          .על ידי העלאת התמונה אתה מסכים לתנאים וההגבלות שלנו
        </div>
        {showRegPopup && (
          <>
            <div
              className="layout"
              onClick={() => setShowRegPopup(false)}
            ></div>
            <div className="popup_leg">
              <button
                className="close_btn"
                onClick={() => setShowRegPopup(false)}
              >
                <X size={20} />
              </button>
              <p>
                שימוש באפליקציה – האפליקציה מיועדת להסרת רקע מתמונות באופן
                אוטומטי. השימוש בשירות הינו באחריות המשתמש בלבד.
              </p>
              <p>
                זכויות יוצרים – המשתמש מצהיר כי הוא בעל הזכויות על התמונות
                המועלות או שיש לו אישור להשתמש בהן. אין להעלות תוכן מפר זכויות
                יוצרים.
              </p>
              <p>
                שמירת פרטיות – האפליקציה אינה שומרת תמונות שהועלו לאחר עיבודן,
                וכל הקבצים נמחקים לאחר זמן סביר.
              </p>
              <p>
                אחריות מוגבלת – המפתחים אינם אחראים לנזקים ישירים או עקיפים
                כתוצאה משימוש באפליקציה.
              </p>
              <p>
                שינויים ועדכונים – אנו שומרים לעצמנו את הזכות לשנות את תנאי
                השימוש בכל עת.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftDiv;
