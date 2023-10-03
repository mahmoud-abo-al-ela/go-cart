import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../../static/data";
import styles from "../../styles/style";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <div className={`${styles.heading}`}>FAQ</div>
      <div className="mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => toggleTab(index + 1)}
          >
            <div className="flex justify-between items-center">
              <div className="font-medium">{item.question}</div>
              <div className="text-gray-600">
                {activeTab === index + 1 ? (
                  <FaMinus size={15} />
                ) : (
                  <FaPlus size={15} />
                )}
              </div>
            </div>
            {activeTab === index + 1 && (
              <div className="mt-2 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
