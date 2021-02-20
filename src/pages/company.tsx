import { Head } from '../components/Head';
import { MainVisual } from '../components/MainVisual';
export default () => {
  return (
    <>
      <Head titlePre="Company" />
      <MainVisual title="COMPANY" />
      <section className="container mx-auto py-40 px-44 font-bold">
        <div className="pl-4">
          <h2 className="lg:text-5xl pb-12 tracking-wider">About Us</h2>
          <p className="text-xl" style={{ lineHeight: 1.7 }}>
            私たちが目指すのは「Interestingな学びを実現すること」です。 Interestingな学びとは、学ぶことそれ自体が面白く、自らの人生に好影響を与えるような 価値ある学びのことです。
            人と人とが関わり合い、学び合う。 これが私たちが考える教育です。 教育活動を、より効果的に、効率的に進化させていくこと。 それはつまり、教育活動の課題を 解決するということ。
            私たちFroomは、教育活動の課題を 解決することを使命とし、 Interestingな学びを実現することを私たちは目指していきます。
          </p>
        </div>
        <div className="pl-4 pt-32">
          <h2 className="lg:text-5xl pb-20 tracking-wider">Team</h2>
          <div>
            <h3 className="text-3xl">水元 陸大 | Mizumoto Ridai</h3>
            <p className="pt-1 text-gray-500 ettx-xl">Founder, 代表取締役CEO</p>
            <div className="pt-6 text-lg" style={{ lineHeight: 2 }}>
              <p>名古屋大学教育学部 学校教育情報コース4年</p>
              <p>
                大学入学後はキャリア教育を行う学生団体や、ITベンチャーでの長期インターンを経験。
                元教員志望であり、高校在学時から学生団体参加・運営での学びをきっかけに、愛知教育大学附属高校から42回生にして初めて一般で名古屋大学へ。
                大学入学後はキャリア教育を行う学生団体や、ITベンチャーでの長期インターンを経験。「"学ぶ"をもっと面白くしたい」という思いから2020年2月にFroomを創業後、様々な教育現場に関わる。コロナによる学びの環境変化から、教育活動のOMO(Online
                Merges with Offline)を志す。
              </p>
            </div>
          </div>
          <div className="pt-20">
            <h3 className="text-3xl">五十川 寛基 | Isogawa Hiroki</h3>
            <p className="pt-1 text-gray-500 ettx-xl">Co-Founder, 取締役CTO</p>
            <div className="pt-6 text-lg" style={{ lineHeight: 2 }}>
              <p>
                高校時代からプログラミングを学び、2018年に大学在籍しながらフリーランスエンジニアとして独立。フロントエンド開発を中心に、バックエンド開発・デザイン・UX設計など多くの経験を積む。その後、セキュリティベンチャーでのインターンを経て、代表の水元と株式会社Froomを創業。技術担当として、Froomの開発全般を担う。SNSでは「マッケイ」として活動している。
              </p>
            </div>
          </div>
        </div>
        <div className="pl-4 pt-32">
          <h2 className="lg:text-5xl pb-20 tracking-wider">Overview</h2>
          <div>
            <table className="w-full text-lg leading-9 border-collapse">
              <tbody>
                <tr>
                  <th className="pl-5 py-8 text-left border-t-2 border-b-2">会社名</th>
                  <td className="border-t-2 border-b-2">株式会社Froom</td>
                </tr>
                <tr>
                  <th className="pl-5 py-8 text-left border-t-2 border-b-2">設立</th>
                  <td className="border-t-2 border-b-2">2020年2月6日</td>
                </tr>
                <tr>
                  <th className="pl-5 py-8 text-left border-t-2 border-b-2">役員</th>
                  <td className="border-t-2 border-b-2">
                    <p>代表取締役CEO 水元陸大</p>
                    <p>取締役CTO 五十川寛基</p>
                  </td>
                </tr>
                <tr>
                  <th className="pl-5 py-8 text-left border-t-2 border-b-2">所在地</th>
                  <td className="border-t-2 border-b-2">
                    〒450-0002 愛知県名古屋市中村区名駅１丁目1-3
                    <br />
                    JRゲートタワー27F 名古屋大学オープンイノベーション拠点
                  </td>
                </tr>
                <tr>
                  <th className="pl-5 py-8 text-left border-t-2 border-b-2">事業内容</th>
                  <td className="border-t-2 border-b-2">現場の人材育成をDX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
