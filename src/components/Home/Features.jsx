import feature1  from "../../assets/20.jpg";
import feature2  from "../../assets/20.jpg";
import feature3  from "../../assets/20.jpg";
import styles from "../../styles";
import { NavLink } from "react-router-dom";

const Features = () => (
  <>
  <div className="flex flex-col items-center justify-center text-center w-full mt-14 ">
  <p className={`${styles.paragraph} uppercase`}>Our Products</p>
  <h2 className="text-[#141414] font-playfair sm:text-[30px] text-[24px] font-semibold leading-[120%]">
   Small Machines
  </h2>
</div>

  <div className="flex flex-wrap flex-col md:flex-row items-center justify-center py-20 gap-12">
    <div className={`${styles.features}`}>
      <img
        src={feature1}
        alt="feature1"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Machine 1</h2>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia, natus quod eum, dignissimos odio ipsa earum officiis veritatis doloremque reprehenderit vero quis saepe ratione, quos perferendis! Mollitia, earum officia?
      </p>
      <NavLink to="/Blog">
        <button type="button" className={`${styles.bt}`}>
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span to="/Blog" className={`${styles.btSpan}`}>
            Buy
          </span>
        </button>
      </NavLink>
    </div>
    <div className={`${styles.features}`}>
      <img
        src={feature2}
        alt="feature2"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Machine 2</h2>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quisquam ullam eius corrupti omnis soluta, quasi, quia labore, ipsa enim ad. Odit magnam labore minima excepturi odio delectus eius perspiciatis.
      </p>
      <NavLink to="/Blog">
        <button type="button" className={`${styles.bt}`}>
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span to="/Blog" className={`${styles.btSpan}`}>
            Buy
          </span>
        </button>
      </NavLink>
    </div>
    <div className={`${styles.features}`}>
      <img
        src={feature3}
        alt="feature3"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Machine 3</h2>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil officia distinctio iusto nostrum tenetur ipsam ea animi. Necessitatibus fugit cupiditate dolor culpa tenetur magni porro, blanditiis cum dolorum quas.
      </p>
      <NavLink to="/Blog">
        <button type="button" className={`${styles.bt}`}>
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span className={`${styles.btSpan}`}>Buy</span>
        </button>
      </NavLink>
    </div>
  </div>
  </>
);

export default Features;
