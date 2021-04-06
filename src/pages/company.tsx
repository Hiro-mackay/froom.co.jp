import { Head } from '../components/Head';
import { MainVisual } from '../components/MainVisual';
import { TeamProfile } from '../components/TeamProfile';
import { Corporate } from '../layouts/corporate';
export default () => {
  return (
    <Corporate>
      <Head titlePre="Company" />
      <MainVisual title="COMPANY" />
      <section className="container mx-auto py-20 md:py-40 px-5 xl:px-44 font-bold">
        <div className="pl-4">
          <h2 className="text-4xl lg:text-5xl pb-14 tracking-wider">About Us</h2>
          <p className="text-lg md:text-xl" style={{ lineHeight: 1.7 }}>
            私たちが目指すのは「Interestingな学びを実現すること」です。
            「Interestingな学び」とは、学ぶことそれ自体が面白く、また、自らに、そして周囲に好影響を与えるような価値ある学びのことです。人と人とが関わり合い、学び合う。これが私たちが考える教育活動です。{' '}
            <br />
            人は生きている限り学び続けます。その学びをもっと面白く。 私たちFroomは、「Interestingな学び」を実現していきます。
          </p>
        </div>
        <div className="pl-4 pt-32">
          <h2 className="text-4xl lg:text-5xl pb-20 tracking-wider">Team</h2>
          <TeamProfile
            image="images/mizumoto-ridai.jpg"
            name="水元 陸大 | Mizumoto Ridai"
            role="Founder, 代表取締役CEO"
            twitter="https://twitter.com/Ridai990215"
            notion="https://www.notion.so/froominc/Froom-20325bcc8d694b27af8388464eaafeab"
          >
            <p>
              名古屋大学教育学部学校教育情報コース4年
              <br />
              大学入学後はキャリア教育を行う学生団体や、ITベンチャーでの長期インターンを経験。
              元教員志望であり、高校在学時から学生団体参加・運営での学びをきっかけに、愛知教育大学附属高校から42回生にして初めて一般で名古屋大学へ。
              大学入学後はキャリア教育を行う学生団体や、ITベンチャーでの長期インターンを経験。「"学ぶ"をもっと面白くしたい」という思いから2020年2月にFroomを創業後、様々な教育現場に関わる。コロナによる学びの環境変化から、教育活動のOMO(Online
              erges with Offline)を志す。
            </p>
          </TeamProfile>
          <div className="pt-32">
            <TeamProfile
              image="images/isogawa-hiroki.jpg"
              name="五十川 寛基 | Isogawa Hiroki"
              role="Co-Founder, 取締役CTO"
              twitter="https://twitter.com/mackay_1503"
              github="https://github.com/Hiro-mackay"
            >
              <p>
                高校時代からプログラミングを学び、2018年に大学に在籍しながらフリーランスエンジニアとして独立。フロントエンド開発を中心に、バックエンド開発・デザイン・UX設計など多くの経験を積む。その後、ベンチャーでのインターンを経て、代表の水元と株式会社Froomを創業。技術担当として、Froomの開発全般を担う。SNSでは「マッケイ」として活動している。
              </p>
            </TeamProfile>
          </div>
        </div>
        <div className="pl-4 pt-32">
          <h2 className="text-4xl lg:text-5xl pb-20 tracking-wider">About</h2>
          <div>
            <table className="w-full text-sm md:text-lg leading-7 md:leading-9 border-collapse">
              <tbody>
                <tr>
                  <th className="w-20 md:w-36 md:pl-5 py-8 text-left border-t-2 border-b-2">会社名</th>
                  <td className="py-6 border-t-2 border-b-2">株式会社Froom</td>
                </tr>
                <tr>
                  <th className="w-20 md:w-36 md:pl-5 py-8 text-left border-t-2 border-b-2">設立</th>
                  <td className="py-6 border-t-2 border-b-2">2020年2月6日</td>
                </tr>
                <tr>
                  <th className="w-20 md:w-36 md:pl-5 py-8 text-left border-t-2 border-b-2">役員</th>
                  <td className="py-6 border-t-2 border-b-2">
                    <p>代表取締役CEO 水元陸大</p>
                    <p>取締役CTO 五十川寛基</p>
                  </td>
                </tr>
                <tr>
                  <th className="w-20 md:w-36 md:pl-5 py-8 text-left border-t-2 border-b-2">所在地</th>
                  <td className="py-6 border-t-2 border-b-2">
                    〒450-0002
                    <br className="md:hidden" />
                    愛知県名古屋市中村区名駅１丁目1-3
                    <br />
                    JRゲートタワー27F
                    <br className="md:hidden" />
                    名古屋大学オープンイノベーション拠点
                  </td>
                </tr>
                <tr>
                  <th className="w-20 md:w-36 md:pl-5 py-8 text-left border-t-2 border-b-2">事業内容</th>
                  <td className="py-6 border-t-2 border-b-2">人材育成DXシステムの開発・提供</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Corporate>
  );
};
