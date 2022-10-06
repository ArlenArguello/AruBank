import { Product } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad porro in, rem cumque, iure nesciunt ea repudiandae officia sint laborum vitae quia mollitia libero perferendis!</p>

        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={Product} alt="card" className="w-[100%] h-[100%] " />
      </div>

    </section>
  )


export default CardDeal