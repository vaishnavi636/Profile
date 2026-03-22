// import profilePhotoImg from "../../assets/profile_photo.jpg";
// import resumePdf from "../../assets/Resume_Vaishnavi.pdf";
// import tenthCertificateImg from "../../assets/profile_photo.jpg";
// import tenthMarksheetImg from "../../assets/profile_photo.jpg";
// import twelfthMarksheetImg from "../../assets/profile_photo.jpg";

// import footballState1Img from "../../assets/profile_photo.jpg";
// import footballState2Img from "../../assets/profile_photo.jpg";
// import footballState3Img from "../../assets/profile_photo.jpg";
// import runnerDistrictImg from "../../assets/profile_photo.jpg";
// import paintingElementaryImg from "../../assets/profile_photo.jpg";
// import paintingIntermediateImg from "../../assets/profile_photo.jpg";

// import bscDegreeCertificateImg from "../../assets/bsc/bsc-degree-certificate.jpg";
// import bscSem1Img from "../../assets/bsc/bsc-sem1-winter-2016.jpg";
// import bscSem2Img from "../../assets/bsc/bsc-sem2-winter-2017.jpg";
// import bscSem3Img from "../../assets/bsc/bsc-sem3-winter-2017.jpg";
// import bscSem4Img from "../../assets/bsc/bsc-sem4-summer-2018.jpg";
// import bscSem5Img from "../../assets/bsc/bsc-sem5-winter-2018.jpg";
// import bscSem6Img from "../../assets/bsc/bsc-sem6-summer-2019.jpg";

// import mosExcelImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import avishkarImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import ciscoLabsImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import cosmeticBeautyImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import powerpointStateImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import electronicPowerSupplyImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import cSkillsImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import seminarUniversityImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import cloudDigitalImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import phpGameImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";
// import ciscoCyberImg from "../../assets/bsc/bsc-sem6-summer-2019.jpg";

// import mscPassingCertificateImg from "../../assets/msc/msc-passing-certificate.jpeg";
// import mscYear1CombinedImg from "../../assets/msc/msc-year1-combined-2019-2020.jpeg";
// import mscYear2CombinedImg from "../../assets/msc/msc-year2-combined-2020-2021.jpeg";
// import mscDegreeCertificateImg from "../../assets/msc/msc-degree-certificate.jpeg";
// import internshipCertificatePdf from "../../assets/msc/internship-certificate.pdf";


import resumePdf from "../../assets/Resume_Vaishnavi.pdf";
import { protectedAssets } from "./protectedAssets";

const profilePhotoFile = protectedAssets.profilePhotoFile.storagePath;
const resumePdfFile = protectedAssets.resumePdfFile.storagePath;
const tenthCertificateImg = protectedAssets.tenthCertificateImg.storagePath;
const tenthMarksheetImg = protectedAssets.tenthMarksheetImg.storagePath;
const twelfthMarksheetImg = protectedAssets.twelfthMarksheetImg.storagePath;

const footballState1Img = protectedAssets.footballState1Img.storagePath;
const footballState2Img = protectedAssets.footballState2Img.storagePath;
const footballState3Img = protectedAssets.footballState3Img.storagePath;
const runnerDistrictImg = protectedAssets.runnerDistrictImg.storagePath;
const paintingElementaryImg = protectedAssets.paintingElementaryImg.storagePath;
const paintingIntermediateImg = protectedAssets.paintingIntermediateImg.storagePath;

const bscDegreeCertificateImg = protectedAssets.bscDegreeCertificateImg.storagePath;
const bscSem1Img = protectedAssets.bscSem1Img.storagePath;
const bscSem2Img = protectedAssets.bscSem2Img.storagePath;
const bscSem3Img = protectedAssets.bscSem3Img.storagePath;
const bscSem4Img = protectedAssets.bscSem4Img.storagePath;
const bscSem5Img = protectedAssets.bscSem5Img.storagePath;
const bscSem6Img = protectedAssets.bscSem6Img.storagePath;

const mosExcelImg = protectedAssets.mosExcelImg.storagePath;
const avishkarImg = protectedAssets.avishkarImg.storagePath;
const ciscoLabsImg = protectedAssets.ciscoLabsImg.storagePath;
const cosmeticBeautyImg = protectedAssets.cosmeticBeautyImg.storagePath;
const powerpointStateImg = protectedAssets.powerpointStateImg.storagePath;
const electronicPowerSupplyImg = protectedAssets.electronicPowerSupplyImg.storagePath;
const cSkillsImg = protectedAssets.cSkillsImg.storagePath;
const seminarUniversityImg = protectedAssets.seminarUniversityImg.storagePath;
const cloudDigitalImg = protectedAssets.cloudDigitalImg.storagePath;
const phpGameImg = protectedAssets.phpGameImg.storagePath;
const ciscoCyberImg = protectedAssets.ciscoCyberImg.storagePath;

const mscPassingCertificateImg = protectedAssets.mscPassingCertificateImg.storagePath;
const mscYear1CombinedImg = protectedAssets.mscYear1CombinedImg.storagePath;
const mscYear2CombinedImg = protectedAssets.mscYear2CombinedImg.storagePath;
const mscDegreeCertificateImg = protectedAssets.mscDegreeCertificateImg.storagePath;
const internshipCertificatePdf = protectedAssets.internshipCertificatePdf.storagePath;


export const profilePhoto = {
  src: profilePhotoFile,
  alt: {
    en: "Vaishnavi Sharma profile photo",
    ja: "ヴァイシュナヴィ・シャルマのプロフィール写真",
  },
};

export const profileTimeline = [
 { id: "tcs",
  year: "TCS",
  content: {
    en: {
      title: "Tata Consultancy Services — Design Automation, Figma Engineering and Enterprise Growth",
      subtitle:
        "A major professional phase where I built internal tools, Figma plugins, AI-assisted systems, dashboards, and enterprise automation solutions while working closely with design, product, and engineering teams.",

      tabs: {
        y2022: {
          label: "2022",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Joined Tata Consultancy Services",
                ja: "Tata Consultancy Servicesに入社",
              },
              role: {
                en: "Software Developer • Pune, India",
                ja: "ソフトウェア開発者 ・ プネ（インド）",
              },
              date: {
                en: "Dec 2022",
                ja: "2022年12月",
              },
              stack: {
                en: "React, TypeScript, Python, Internal Tools",
                ja: "React、TypeScript、Python、社内ツール",
              },
              description: {
                en: "Joined Tata Consultancy Services and started contributing to internal web tools and automation solutions.",
                ja: "Tata Consultancy Servicesに入社し、社内向けWebツールおよび自動化ソリューションの開発に携わり始めました。",
              },
              contribution: {
                en: [
                  "Started working on internal web tools and automation systems.",
                  "Entered an Agile working environment with cross-functional collaboration.",
                  "Built the foundation for later Figma plugin and dashboard work.",
                ],
                ja: [
                  "社内向けWebツールおよび自動化システムの開発を開始しました。",
                  "アジャイル環境の中で、部門横断の連携を経験しました。",
                  "後のFigmaプラグイン開発やダッシュボード構築につながる基盤を築きました。",
                ],
              },
              impact: {
                en: [
                  "Marked the beginning of my enterprise engineering journey.",
                  "Built confidence in working with real internal systems and teams.",
                ],
                ja: [
                  "エンタープライズ開発者としての歩みがここから始まりました。",
                  "実際の社内システムとチームの中で働く自信を身につけました。",
                ],
              },
            },
          ],
        },

        y2023: {
          label: "2023",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Internal Tools and Automation Development",
                ja: "社内ツールと自動化開発",
              },
              role: {
                en: "Software Developer",
                ja: "ソフトウェア開発者",
              },
              date: {
                en: "Jan 2023 – Dec 2023",
                ja: "2023年1月 – 2023年12月",
              },
              stack: {
                en: "React, TypeScript, Python, Node.js",
                ja: "React、TypeScript、Python、Node.js",
              },
              description: {
                en: "Worked on internal tools, automation solutions, backend APIs, and workflow improvements while collaborating with multiple teams.",
                ja: "複数チームと連携しながら、社内ツール、自動化ソリューション、バックエンドAPI、業務フロー改善に取り組みました。",
              },
              contribution: {
                en: [
                  "Developed internal tools using React, TypeScript, and Python.",
                  "Built and optimized REST APIs using Node.js.",
                  "Worked closely with design, product, and engineering teams.",
                  "Contributed to internal workflow automation and documentation practices.",
                ],
                ja: [
                  "React、TypeScript、Pythonを用いた社内ツールを開発しました。",
                  "Node.jsでREST APIを構築・最適化しました。",
                  "デザイン、プロダクト、エンジニアリング各チームと密に連携しました。",
                  "社内ワークフローの自動化およびドキュメント整備にも貢献しました。",
                ],
              },
              impact: {
                en: [
                  "Strengthened my full-stack and enterprise working foundation.",
                  "Improved my ability to deliver within collaborative Agile teams.",
                ],
                ja: [
                  "フルスタックおよびエンタープライズ開発の基盤を強化しました。",
                  "アジャイルなチーム環境で成果を出す力を高めました。",
                ],
              },
            },
          ],
        },

        y2024: {
          label: "2024",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Figma AI Plugin",
                ja: "Figma AIプラグイン",
              },
              role: {
                en: "Internal AI Plugin Development",
                ja: "社内向けAIプラグイン開発",
              },
              date: {
                en: "Oct 2024 – Present",
                ja: "2024年10月 – 現在",
              },
              stack: {
                en: "Python, React, TypeScript, Figma REST API",
                ja: "Python、React、TypeScript、Figma REST API",
              },
              description: {
                en: "Worked on an internal AI-powered assistant for Figma to support enterprise accounts that cannot use external AI services.",
                ja: "外部AIを利用できないエンタープライズ環境向けに、Figma内で使える社内AIアシスタントの開発に取り組みました。",
              },
              contribution: {
                en: [
                  "Designed AI-assisted plugin flows for internal usage.",
                  "Worked with Python, React, and TypeScript in Figma plugin architecture.",
                  "Focused on secure internal enterprise use cases.",
                ],
                ja: [
                  "社内利用を前提としたAI支援プラグインの設計に取り組みました。",
                  "Python、React、TypeScriptを用いてFigmaプラグイン構成を開発しました。",
                  "安全な社内利用を前提としたエンタープライズ要件に対応しました。",
                ],
              },
              impact: {
                en: [
                  "Opened a path for internal AI support in restricted enterprise environments.",
                  "Strengthened my plugin architecture and AI integration skills.",
                ],
                ja: [
                  "制約のある企業環境でも活用できる社内AI支援の可能性を広げました。",
                  "プラグイン設計力とAI統合スキルをさらに強化しました。",
                ],
              },
            },
            {
              title: {
                en: "Figma Dashboard and Workflow Automation",
                ja: "Figmaダッシュボードと業務自動化",
              },
              role: {
                en: "Internal Analytics and Automation",
                ja: "社内分析・自動化",
              },
              date: {
                en: "Jan 2024 – Dec 2024",
                ja: "2024年1月 – 2024年12月",
              },
              stack: {
                en: "Tableau, GCP, Figma Data, Workflow Automation",
                ja: "Tableau、GCP、Figmaデータ、業務自動化",
              },
              description: {
                en: "Worked on dashboarding, data visibility, and automation support for internal teams using Figma data and visualization tools.",
                ja: "Figmaデータを活用し、社内チーム向けのダッシュボード構築、可視化、業務自動化支援に取り組みました。",
              },
              contribution: {
                en: [
                  "Built Figma dashboard visualizations using Tableau.",
                  "Improved visibility of enterprise usage and workflows.",
                  "Supported automation and reporting needs for internal teams.",
                ],
                ja: [
                  "Tableauを用いてFigmaダッシュボードを構築しました。",
                  "エンタープライズ利用状況や業務フローの可視性を向上させました。",
                  "社内チーム向けの自動化およびレポート要件を支援しました。",
                ],
              },
              impact: {
                en: [
                  "Improved data-driven understanding across teams.",
                  "Added strong analytics and reporting capability to my profile.",
                ],
                ja: [
                  "チーム全体のデータ活用意識と理解を高めました。",
                  "分析・可視化分野での強みをプロフィールに加えることができました。",
                ],
              },
            },
            {
              title: {
                en: "ForgeRock OAuth + Figma / JIRA Improvements",
                ja: "ForgeRock OAuth連携とJIRA改善",
              },
              role: {
                en: "Integration and Workflow Improvement",
                ja: "連携開発・業務改善",
              },
              date: {
                en: "2024",
                ja: "2024年",
              },
              stack: {
                en: "OAuth, ForgeRock, Figma, JIRA",
                ja: "OAuth、ForgeRock、Figma、JIRA",
              },
              description: {
                en: "Worked on OAuth-related integration with Figma and supported improvements in JIRA environment and workflow handling.",
                ja: "FigmaとのOAuth連携に取り組み、あわせてJIRA環境や業務フロー改善も支援しました。",
              },
              contribution: {
                en: [
                  "Worked on ForgeRock OAuth integration with Figma.",
                  "Improved internal process flows connected to tooling.",
                  "Contributed to JIRA environment enhancement.",
                ],
                ja: [
                  "ForgeRockを用いたFigmaとのOAuth連携に取り組みました。",
                  "ツール利用に関わる社内フロー改善に貢献しました。",
                  "JIRA環境の改善にも関わりました。",
                ],
              },
              impact: {
                en: [
                  "Added systems integration exposure to my experience.",
                  "Improved understanding of enterprise identity and workflow systems.",
                ],
                ja: [
                  "システム連携分野での経験を広げました。",
                  "企業向け認証基盤や業務フローへの理解を深めました。",
                ],
              },
            },
          ],
        },

        y2025: {
          label: "2025",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Spec Checker Plugin Figma",
                ja: "Spec Checkerプラグイン",
              },
              role: {
                en: "Jaguar Land Rover (Offsite) • Full Time",
                ja: "Jaguar Land Rover（オフサイト）・ フルタイム",
              },
              date: {
                en: "Jan 2025 – Mar 2025",
                ja: "2025年1月 – 2025年3月",
              },
              stack: {
                en: "React, TypeScript, JavaScript, Figma",
                ja: "React、TypeScript、JavaScript、Figma",
              },
              description: {
                en: "Built a Figma plugin that checks hidden manual errors and validates specifications before design finalization.",
                ja: "デザイン最終化前に、見落とされやすい手動ミスや仕様の不整合を検出するFigmaプラグインを開発しました。",
              },
              contribution: {
                en: [
                  "Worked with Figma project screens and validation logic.",
                  "Checked primitive objects, styles, typography, and other design impurities.",
                  "Implemented multiple operations and provided clear feedback with solutions.",
                ],
                ja: [
                  "Figma画面と検証ロジックをもとにプラグインを開発しました。",
                  "プリミティブ、スタイル、タイポグラフィなどの設計上の不整合を検出しました。",
                  "複数のチェック処理を実装し、解決策付きのフィードバックを提供しました。",
                ],
              },
              impact: {
                en: [
                  "Improved design quality before final review.",
                  "Reduced hidden manual inconsistencies in design files.",
                ],
                ja: [
                  "最終レビュー前のデザイン品質を向上させました。",
                  "設計ファイル内の見えにくい手動ミスを減らしました。",
                ],
              },
            },
            {
              title: {
                en: "Code Generation Plugin",
                ja: "コード生成プラグイン",
              },
              role: {
                en: "Jaguar Land Rover (Offsite) • Full Time",
                ja: "Jaguar Land Rover（オフサイト）・ フルタイム",
              },
              date: {
                en: "Apr 2025 – Present",
                ja: "2025年4月 – 現在",
              },
              stack: {
                en: "React, Python, OpenCV, HTML, CSS, Figma API",
                ja: "React、Python、OpenCV、HTML、CSS、Figma API",
              },
              description: {
                en: "Built a Figma plugin that converts Figma designs into code such as React, HTML, and CSS, with my special addition of a running React project setup. The plugin can generate a React website project with around 80% visual accuracy.",
                ja: "FigmaデザインをReact、HTML、CSSへ変換し、さらに実行可能なReactプロジェクト構成まで生成するFigmaプラグインを開発しました。画面デザインを約80%の再現度で動くReactサイトへ変換できます。",
              },
              contribution: {
                en: [
                  "Converted Figma screens into React, HTML, and CSS output.",
                  "Added React project scaffolding with dependency setup.",
                  "Focused on generating a runnable website project, not only code snippets.",
                ],
                ja: [
                  "Figma画面をReact、HTML、CSSへ変換する仕組みを構築しました。",
                  "依存関係を含むReactプロジェクト構成の自動生成を追加しました。",
                  "単なるコード断片ではなく、動作するWebサイトプロジェクト生成に重点を置きました。",
                ],
              },
              impact: {
                en: [
                  "Significantly reduced design-to-code effort.",
                  "Created a practical bridge between designers and frontend developers.",
                ],
                ja: [
                  "デザインから実装までの工数を大きく削減しました。",
                  "デザイナーとフロントエンド開発者の間をつなぐ実践的な仕組みを作りました。",
                ],
              },
            },
          ],
        },

        y2026: {
          label: "2026",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Ongoing Enterprise Automation and Plugin Development",
                ja: "継続中のエンタープライズ自動化とプラグイン開発",
              },
              role: {
                en: "Software Developer • Present Phase",
                ja: "ソフトウェア開発者 ・ 現在進行中",
              },
              date: {
                en: "2026 – Present",
                ja: "2026年 – 現在",
              },
              stack: {
                en: "React, TypeScript, Python, Figma, APIs, Automation",
                ja: "React、TypeScript、Python、Figma、API、自動化",
              },
              description: {
                en: "Continuing to expand enterprise plugin capabilities, automation systems, internal AI support, and collaboration across design-tech workflows.",
                ja: "エンタープライズ向けプラグイン機能、自動化基盤、社内AI支援、そしてデザイン技術領域の連携をさらに発展させています。",
              },
              contribution: {
                en: [
                  "Continuing long-term plugin and tooling development.",
                  "Refining internal systems for design consistency and automation.",
                  "Building on the success of 2024–2025 enterprise initiatives.",
                ],
                ja: [
                  "長期的なプラグインおよびツール開発を継続しています。",
                  "デザイン整合性と自動化のための社内基盤を改善しています。",
                  "2024年〜2025年の成果を基盤に、より高度な仕組みへ発展させています。",
                ],
              },
              impact: {
                en: [
                  "Represents continuity, growth, and ownership in enterprise engineering.",
                  "Shows sustained contribution beyond one-off projects.",
                ],
                ja: [
                  "エンタープライズ開発における継続性、成長、主体性を示しています。",
                  "単発の成果ではなく、継続的な価値提供を表しています。",
                ],
              },
            },
          ],
        },

        achievements: {
          label: "Achievements",
          type: "achievementHighlights",
          highlights: [
            {
              value: "2024",
              label: {
                en: "Figma team JLR Appreciation",
                ja: "Figmaチーム JLR Appreciation",
              },
            },
            {
              value: "2025",
              label: {
                en: "Best Developer Award",
                ja: "Best Developer Award",
              },
            },
            {
              value: "2025",
              label: {
                en: "Performance Improvement Award",
                ja: "Performance Improvement Award",
              },
            },
            {
              value: "2025",
              label: {
                en: "Legendary Developer Award JLR",
                ja: "Legendary Developer Award JLR",
              },
            },
          ],
          items: [
            {
              title: {
                en: "Figma Team JLR Appreciation (2024)",
                ja: "Figma Team JLR Appreciation（2024）",
              },
              description: {
                en: "Recognized for contribution and support in Figma-related enterprise work.",
                ja: "Figma関連のエンタープライズ業務への貢献が評価されました。",
              },
            },
            {
              title: {
                en: "Best Developer Award (2025)",
                ja: "Best Developer Award（2025）",
              },
              description: {
                en: "Awarded for strong technical contribution and delivery quality.",
                ja: "技術力と高品質な成果が評価されて受賞しました。",
              },
            },
            {
              title: {
                en: "Performance Improvement Award (2025)",
                ja: "Performance Improvement Award（2025）",
              },
              description: {
                en: "Recognized for measurable improvement and continued contribution.",
                ja: "継続的な貢献と改善成果が認められました。",
              },
            },
            {
              title: {
                en: "Legendary Developer Award JLR (2025)",
                ja: "Legendary Developer Award JLR（2025）",
              },
              description: {
                en: "Received for outstanding impact and visible value creation.",
                ja: "大きなインパクトと明確な価値創出が評価されて受賞しました。",
              },
            },
          ],
        },
      },
    },

    ja: {
      title: "TCS — Figma自動化・AI開発・エンタープライズ成長",
      subtitle:
        "Figmaプラグイン、AIツール、バックエンド開発、ダッシュボード構築、そして部門横断の連携を通して大きく成長した時期です。",
      tabs: {
        y2022: {
          label: "2022",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Joined Tata Consultancy Services",
                ja: "Tata Consultancy Servicesに入社",
              },
              role: {
                en: "Software Developer • Pune, India",
                ja: "ソフトウェア開発者 ・ プネ（インド）",
              },
              date: {
                en: "Dec 2022",
                ja: "2022年12月",
              },
              stack: {
                en: "React, TypeScript, Python, Internal Tools",
                ja: "React、TypeScript、Python、社内ツール",
              },
              description: {
                en: "Joined Tata Consultancy Services and started contributing to internal web tools and automation solutions.",
                ja: "Tata Consultancy Servicesに入社し、社内向けWebツールおよび自動化ソリューションの開発に携わり始めました。",
              },
              contribution: {
                en: [
                  "Started working on internal web tools and automation systems.",
                  "Entered an Agile working environment with cross-functional collaboration.",
                  "Built the foundation for later Figma plugin and dashboard work.",
                ],
                ja: [
                  "社内向けWebツールおよび自動化システムの開発を開始しました。",
                  "アジャイル環境の中で、部門横断の連携を経験しました。",
                  "後のFigmaプラグイン開発やダッシュボード構築につながる基盤を築きました。",
                ],
              },
              impact: {
                en: [
                  "Marked the beginning of my enterprise engineering journey.",
                  "Built confidence in working with real internal systems and teams.",
                ],
                ja: [
                  "エンタープライズ開発者としての歩みがここから始まりました。",
                  "実際の社内システムとチームの中で働く自信を身につけました。",
                ],
              },
            },
          ],
        },

        y2023: {
          label: "2023",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Internal Tools and Automation Development",
                ja: "社内ツールと自動化開発",
              },
              role: {
                en: "Software Developer",
                ja: "ソフトウェア開発者",
              },
              date: {
                en: "Jan 2023 – Dec 2023",
                ja: "2023年1月 – 2023年12月",
              },
              stack: {
                en: "React, TypeScript, Python, Node.js",
                ja: "React、TypeScript、Python、Node.js",
              },
              description: {
                en: "Worked on internal tools, automation solutions, backend APIs, and workflow improvements while collaborating with multiple teams.",
                ja: "複数チームと連携しながら、社内ツール、自動化ソリューション、バックエンドAPI、業務フロー改善に取り組みました。",
              },
              contribution: {
                en: [
                  "Developed internal tools using React, TypeScript, and Python.",
                  "Built and optimized REST APIs using Node.js.",
                  "Worked closely with design, product, and engineering teams.",
                  "Contributed to internal workflow automation and documentation practices.",
                ],
                ja: [
                  "React、TypeScript、Pythonを用いた社内ツールを開発しました。",
                  "Node.jsでREST APIを構築・最適化しました。",
                  "デザイン、プロダクト、エンジニアリング各チームと密に連携しました。",
                  "社内ワークフローの自動化およびドキュメント整備にも貢献しました。",
                ],
              },
              impact: {
                en: [
                  "Strengthened my full-stack and enterprise working foundation.",
                  "Improved my ability to deliver within collaborative Agile teams.",
                ],
                ja: [
                  "フルスタックおよびエンタープライズ開発の基盤を強化しました。",
                  "アジャイルなチーム環境で成果を出す力を高めました。",
                ],
              },
            },
          ],
        },

        y2024: {
          label: "2024",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Figma AI Plugin",
                ja: "Figma AIプラグイン",
              },
              role: {
                en: "Internal AI Plugin Development",
                ja: "社内向けAIプラグイン開発",
              },
              date: {
                en: "Oct 2024 – Present",
                ja: "2024年10月 – 現在",
              },
              stack: {
                en: "Python, React, TypeScript, Figma REST API",
                ja: "Python、React、TypeScript、Figma REST API",
              },
              description: {
                en: "Worked on an internal AI-powered assistant for Figma to support enterprise accounts that cannot use external AI services.",
                ja: "外部AIを利用できないエンタープライズ環境向けに、Figma内で使える社内AIアシスタントの開発に取り組みました。",
              },
              contribution: {
                en: [
                  "Designed AI-assisted plugin flows for internal usage.",
                  "Worked with Python, React, and TypeScript in Figma plugin architecture.",
                  "Focused on secure internal enterprise use cases.",
                ],
                ja: [
                  "社内利用を前提としたAI支援プラグインの設計に取り組みました。",
                  "Python、React、TypeScriptを用いてFigmaプラグイン構成を開発しました。",
                  "安全な社内利用を前提としたエンタープライズ要件に対応しました。",
                ],
              },
              impact: {
                en: [
                  "Opened a path for internal AI support in restricted enterprise environments.",
                  "Strengthened my plugin architecture and AI integration skills.",
                ],
                ja: [
                  "制約のある企業環境でも活用できる社内AI支援の可能性を広げました。",
                  "プラグイン設計力とAI統合スキルをさらに強化しました。",
                ],
              },
            },
            {
              title: {
                en: "Figma Dashboard and Workflow Automation",
                ja: "Figmaダッシュボードと業務自動化",
              },
              role: {
                en: "Internal Analytics and Automation",
                ja: "社内分析・自動化",
              },
              date: {
                en: "Jan 2024 – Dec 2024",
                ja: "2024年1月 – 2024年12月",
              },
              stack: {
                en: "Tableau, GCP, Figma Data, Workflow Automation",
                ja: "Tableau、GCP、Figmaデータ、業務自動化",
              },
              description: {
                en: "Worked on dashboarding, data visibility, and automation support for internal teams using Figma data and visualization tools.",
                ja: "Figmaデータを活用し、社内チーム向けのダッシュボード構築、可視化、業務自動化支援に取り組みました。",
              },
              contribution: {
                en: [
                  "Built Figma dashboard visualizations using Tableau.",
                  "Improved visibility of enterprise usage and workflows.",
                  "Supported automation and reporting needs for internal teams.",
                ],
                ja: [
                  "Tableauを用いてFigmaダッシュボードを構築しました。",
                  "エンタープライズ利用状況や業務フローの可視性を向上させました。",
                  "社内チーム向けの自動化およびレポート要件を支援しました。",
                ],
              },
              impact: {
                en: [
                  "Improved data-driven understanding across teams.",
                  "Added strong analytics and reporting capability to my profile.",
                ],
                ja: [
                  "チーム全体のデータ活用意識と理解を高めました。",
                  "分析・可視化分野での強みをプロフィールに加えることができました。",
                ],
              },
            },
            {
              title: {
                en: "ForgeRock OAuth + Figma / JIRA Improvements",
                ja: "ForgeRock OAuth連携とJIRA改善",
              },
              role: {
                en: "Integration and Workflow Improvement",
                ja: "連携開発・業務改善",
              },
              date: {
                en: "2024",
                ja: "2024年",
              },
              stack: {
                en: "OAuth, ForgeRock, Figma, JIRA",
                ja: "OAuth、ForgeRock、Figma、JIRA",
              },
              description: {
                en: "Worked on OAuth-related integration with Figma and supported improvements in JIRA environment and workflow handling.",
                ja: "FigmaとのOAuth連携に取り組み、あわせてJIRA環境や業務フロー改善も支援しました。",
              },
              contribution: {
                en: [
                  "Worked on ForgeRock OAuth integration with Figma.",
                  "Improved internal process flows connected to tooling.",
                  "Contributed to JIRA environment enhancement.",
                ],
                ja: [
                  "ForgeRockを用いたFigmaとのOAuth連携に取り組みました。",
                  "ツール利用に関わる社内フロー改善に貢献しました。",
                  "JIRA環境の改善にも関わりました。",
                ],
              },
              impact: {
                en: [
                  "Added systems integration exposure to my experience.",
                  "Improved understanding of enterprise identity and workflow systems.",
                ],
                ja: [
                  "システム連携分野での経験を広げました。",
                  "企業向け認証基盤や業務フローへの理解を深めました。",
                ],
              },
            },
          ],
        },

        y2025: {
          label: "2025",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Spec Checker Plugin Figma",
                ja: "Spec Checkerプラグイン",
              },
              role: {
                en: "Jaguar Land Rover (Offsite) • Full Time",
                ja: "Jaguar Land Rover（オフサイト）・ フルタイム",
              },
              date: {
                en: "Jan 2025 – Mar 2025",
                ja: "2025年1月 – 2025年3月",
              },
              stack: {
                en: "React, TypeScript, JavaScript, Figma",
                ja: "React、TypeScript、JavaScript、Figma",
              },
              description: {
                en: "Built a Figma plugin that checks hidden manual errors and validates specifications before design finalization.",
                ja: "デザイン最終化前に、見落とされやすい手動ミスや仕様の不整合を検出するFigmaプラグインを開発しました。",
              },
              contribution: {
                en: [
                  "Worked with Figma project screens and validation logic.",
                  "Checked primitive objects, styles, typography, library components, and hidden inconsistencies.",
                  "Implemented multiple operations and provided clear feedback with solutions.",
                ],
                ja: [
                  "Figma画面と検証ロジックをもとにプラグインを開発しました。",
                  "プリミティブ、スタイル、タイポグラフィ、ライブラリコンポーネントなどの不整合を検出しました。",
                  "複数のチェック処理を実装し、解決策付きのフィードバックを提供しました。",
                ],
              },
              impact: {
                en: [
                  "Improved design quality before final review.",
                  "Reduced hidden manual inconsistencies in design files.",
                ],
                ja: [
                  "最終レビュー前のデザイン品質を向上させました。",
                  "設計ファイル内の見えにくい手動ミスを減らしました。",
                ],
              },
            },
            {
              title: {
                en: "Code Generation Plugin",
                ja: "コード生成プラグイン",
              },
              role: {
                en: "Jaguar Land Rover (Offsite) • Full Time",
                ja: "Jaguar Land Rover（オフサイト）・ フルタイム",
              },
              date: {
                en: "Apr 2025 – Present",
                ja: "2025年4月 – 現在",
              },
              stack: {
                en: "React, Python, OpenCV, HTML, CSS, React Project Setup, Figma API",
                ja: "React、Python、OpenCV、HTML、CSS、Reactプロジェクト構成、Figma API",
              },
              description: {
                en: "Built a Figma plugin that converts Figma designs into code such as React, HTML, and CSS, with my special addition of a running React project setup. The plugin can generate a React website project with around 80% visual accuracy.",
                ja: "FigmaデザインをReact、HTML、CSSへ変換し、さらに実行可能なReactプロジェクト構成まで生成するFigmaプラグインを開発しました。画面デザインを約80%の再現度で動くReactサイトへ変換できます。",
              },
              contribution: {
                en: [
                  "Converted Figma screens into React, HTML, and CSS output.",
                  "Added React project scaffolding with dependency setup.",
                  "Focused on generating a runnable website project, not only code snippets.",
                ],
                ja: [
                  "Figma画面をReact、HTML、CSSへ変換する仕組みを構築しました。",
                  "依存関係を含むReactプロジェクト構成の自動生成を追加しました。",
                  "単なるコード断片ではなく、動作するWebサイトプロジェクト生成に重点を置きました。",
                ],
              },
              impact: {
                en: [
                  "Significantly reduced design-to-code effort.",
                  "Created a practical bridge between designers and frontend developers.",
                ],
                ja: [
                  "デザインから実装までの工数を大きく削減しました。",
                  "デザイナーとフロントエンド開発者の間をつなぐ実践的な仕組みを作りました。",
                ],
              },
            },
          ],
        },

        y2026: {
          label: "2026",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Ongoing Enterprise Automation and Plugin Development",
                ja: "継続中のエンタープライズ自動化とプラグイン開発",
              },
              role: {
                en: "Software Developer • Present Phase",
                ja: "ソフトウェア開発者 ・ 現在進行中",
              },
              date: {
                en: "2026 – Present",
                ja: "2026年 – 現在",
              },
              stack: {
                en: "React, TypeScript, Python, Figma, APIs, Automation",
                ja: "React、TypeScript、Python、Figma、API、自動化",
              },
              description: {
                en: "Continuing to expand enterprise plugin capabilities, automation systems, internal AI support, and collaboration across design-tech workflows.",
                ja: "エンタープライズ向けプラグイン機能、自動化基盤、社内AI支援、そしてデザイン技術領域の連携をさらに発展させています。",
              },
              contribution: {
                en: [
                  "Continuing long-term plugin and tooling development.",
                  "Refining internal systems for design consistency and automation.",
                  "Building on the success of 2024–2025 enterprise initiatives.",
                ],
                ja: [
                  "長期的なプラグインおよびツール開発を継続しています。",
                  "デザイン整合性と自動化のための社内基盤を改善しています。",
                  "2024年〜2025年の成果を基盤に、より高度な仕組みへ発展させています。",
                ],
              },
              impact: {
                en: [
                  "Represents continuity, growth, and ownership in enterprise engineering.",
                  "Shows sustained contribution beyond one-off projects.",
                ],
                ja: [
                  "エンタープライズ開発における継続性、成長、主体性を示しています。",
                  "単発の成果ではなく、継続的な価値提供を表しています。",
                ],
              },
            },
          ],
        },

        achievements: {
          label: "実績",
          type: "achievementHighlights",
          highlights: [
            {
              value: "2024",
              label: {
                en: "Figma team JLR Appreciation",
                ja: "Figmaチーム JLR Appreciation",
              },
            },
            {
              value: "2025",
              label: {
                en: "Best Developer Award",
                ja: "Best Developer Award",
              },
            },
            {
              value: "2025",
              label: {
                en: "Performance Improvement Award",
                ja: "Performance Improvement Award",
              },
            },
            {
              value: "2025",
              label: {
                en: "Legendary Developer Award JLR",
                ja: "Legendary Developer Award JLR",
              },
            },
          ],
          items: [
            {
              title: {
                en: "Figma Team JLR Appreciation (2024)",
                ja: "Figma Team JLR Appreciation（2024）",
              },
              description: {
                en: "Recognized for contribution and support in Figma-related enterprise work.",
                ja: "Figma関連のエンタープライズ業務への貢献が評価されました。",
              },
            },
            {
              title: {
                en: "Best Developer Award (2025)",
                ja: "Best Developer Award（2025）",
              },
              description: {
                en: "Awarded for strong technical contribution and delivery quality.",
                ja: "技術力と高品質な成果が評価されて受賞しました。",
              },
            },
            {
              title: {
                en: "Performance Improvement Award (2025)",
                ja: "Performance Improvement Award（2025）",
              },
              description: {
                en: "Recognized for measurable improvement and continued contribution.",
                ja: "継続的な貢献と改善成果が認められました。",
              },
            },
            {
              title: {
                en: "Legendary Developer Award JLR (2025)",
                ja: "Legendary Developer Award JLR（2025）",
              },
              description: {
                en: "Received for outstanding impact and visible value creation.",
                ja: "大きなインパクトと明確な価値創出が評価されて受賞しました。",
              },
            },
          ],
        },
      },
    },
  },
},

 {id: "capgemini",
  year: "Capgemini",
  content: {
    en: {
      title: "Capgemini — Enterprise Backend Development and Professional Growth",
      subtitle:
        "A phase of real enterprise work, backend API development, course-based upskilling, and stronger Java backend engineering foundations.",
      tabs: {
        experience: {
          label: "Experience",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Capgemini",
                ja: "Capgemini",
              },
              role: {
                en: "Software Engineer • Pune, India",
                ja: "ソフトウェアエンジニア ・ プネ（インド）",
              },
              date: {
                en: "Jul 2021 – Dec 2022",
                ja: "2021年7月 – 2022年12月",
              },
              stack: {
                en: "Spring Boot, REST API, Database Integration, Java",
                ja: "Spring Boot、REST API、データベース連携、Java",
              },
              description: {
                en: "Worked in an enterprise software environment and contributed to backend development and dispute management systems.",
                ja: "エンタープライズ環境において、バックエンド開発および業務系システムに携わりました。",
              },
              contribution: {
                en: [
                  "Worked on the EPP Dispute Project to manage electronic transaction disputes.",
                  "Developed and maintained Spring Boot APIs.",
                  "Integrated backend services with databases.",
                ],
                ja: [
                  "電子取引に関する紛争管理を行うEPP Dispute Projectに携わりました。",
                  "Spring Boot APIの開発および保守を担当しました。",
                  "バックエンドサービスとデータベースの連携を行いました。",
                ],
              },
              impact: {
                en: [
                  "Strengthened enterprise backend development experience.",
                  "Built production-level confidence in Java and API development.",
                  "Added hands-on experience with real business systems.",
                ],
                ja: [
                  "エンタープライズ向けバックエンド開発の経験を強化しました。",
                  "JavaおよびAPI開発における実務レベルの自信を高めました。",
                  "実際の業務システムに関わる実践経験を積みました。",
                ],
              },
            },
          ],
        },

        projects: {
          label: "Projects",
          type: "projectCards",
          items: [
            {
              title: {
                en: "EPP Dispute Project",
                ja: "EPP Dispute Project",
              },
              role: {
                en: "Enterprise Project",
                ja: "エンタープライズプロジェクト",
              },
              date: {
                en: "During Capgemini tenure",
                ja: "Capgemini在籍期間中",
              },
              stack: {
                en: "Spring Boot, REST API, Database",
                ja: "Spring Boot、REST API、データベース",
              },
              description: {
                en: "Worked on a project to manage electronic transaction disputes in an enterprise environment.",
                ja: "エンタープライズ環境において、電子取引紛争を管理するプロジェクトに携わりました。",
              },
              contribution: {
                en: [
                  "Developed backend APIs using Spring Boot.",
                  "Maintained application logic and database integration.",
                  "Supported enterprise workflow handling.",
                ],
                ja: [
                  "Spring Bootを用いたバックエンドAPIを開発しました。",
                  "業務ロジックおよびデータベース連携を担当しました。",
                  "エンタープライズ業務フローの対応を支援しました。",
                ],
              },
              impact: {
                en: [
                  "Built stronger backend ownership.",
                  "Improved practical experience in enterprise API development.",
                ],
                ja: [
                  "バックエンド開発に対する責任感をさらに高めました。",
                  "エンタープライズAPI開発の実務経験を深めました。",
                ],
              },
            },
            {
              title: {
                en: "Spring Boot API Development and Integration",
                ja: "Spring Boot API開発と連携",
              },
              role: {
                en: "Backend Engineering Work",
                ja: "バックエンド開発業務",
              },
              date: {
                en: "Jul 2021 – Dec 2022",
                ja: "2021年7月 – 2022年12月",
              },
              stack: {
                en: "Spring Boot, Java, Database Integration",
                ja: "Spring Boot、Java、データベース連携",
              },
              description: {
                en: "Focused on API development, backend logic, and database integration while building enterprise-grade applications.",
                ja: "エンタープライズ向けアプリケーションの開発において、API開発、バックエンドロジック、データベース連携に取り組みました。",
              },
              contribution: {
                en: [
                  "Built and maintained Spring Boot services.",
                  "Integrated application services with databases.",
                  "Contributed to backend system reliability.",
                ],
                ja: [
                  "Spring Bootサービスの開発および保守を行いました。",
                  "アプリケーションサービスとデータベースの連携を実施しました。",
                  "バックエンドシステムの安定性向上に貢献しました。",
                ],
              },
              impact: {
                en: [
                  "Expanded backend engineering confidence.",
                  "Prepared a strong base for future full-stack and enterprise work.",
                ],
                ja: [
                  "バックエンド開発に対する自信をさらに高めました。",
                  "今後のフルスタックおよびエンタープライズ開発につながる基盤を築きました。",
                ],
              },
            },
          ],
        },

        iit: {
          label: "INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE",
          type: "schoolEducation",
          items: [
            {
              level: {
                en: "Advanced Certificate Program in Back End Software Development",
                ja: "バックエンドソフトウェア開発 上級認定プログラム",
              },
              institution: {
                en: "Great Lakes / Indian Institute of Technology, Roorkee",
                ja: "Great Lakes / Indian Institute of Technology, Roorkee",
              },
              degreeLabel: {
                en: "Professional Certificate Program",
                ja: "専門認定プログラム",
              },
              year: "Jan 2022 – Mar 2023",
              scoreBadge: {
                en: "Professional Upskilling",
                ja: "専門スキル強化",
              },
              board: {
                en: "Back End Software Development",
                ja: "バックエンドソフトウェア開発",
              },
              stream: {
                en: "Java, Spring, Hibernate, MVC, REST API, DSA, OOPs",
                ja: "Java、Spring、Hibernate、MVC、REST API、DSA、OOPs",
              },
              result: {
                en: "Completed",
                ja: "修了",
              },
              score: {
                en: "Certificate Program",
                ja: "認定プログラム",
              },
              summary: {
                en: "Completed a structured backend development program that strengthened my Java, Spring, Hibernate, REST API, MVC, DSA, and OOPs foundation.",
                ja: "Java、Spring、Hibernate、REST API、MVC、DSA、OOPsの基盤を強化する体系的なバックエンド開発プログラムを修了しました。",
              },
              academicHighlights: {
                en: [
                  "Learned backend engineering with Java and Spring ecosystem.",
                  "Built project-based understanding across OOPs, DSA, MVC, and REST APIs.",
                  "Strengthened enterprise-ready backend development fundamentals.",
                ],
                ja: [
                  "JavaとSpringエコシステムによるバックエンド開発を学びました。",
                  "OOPs、DSA、MVC、REST APIをプロジェクトベースで理解しました。",
                  "実務に近いバックエンド開発の基礎力を強化しました。",
                ],
              },
              projectHighlights: {
                en: [
                  "REST API Web Application (Jul 2022): Built an Employee Management Web App using Spring, Hibernate, JSP, MVC, and Spring Security with CRUD operations and authentication.",
                  "Spring MVC (Jul 2022): Built a Customer Management Web App with CRUD flows using Spring, Hibernate, JSP, MVC, and mappings.",
                  "Data Structures and Algorithms (May 2022): Solved projects on skyscraper construction scheduling and binary-tree-to-skewed-tree transformation using Queue, LinkedList, Stacks, BST, OOPs, and clean coding.",
                  "Java OOPs (Mar 2022): Built a department-based Java system using inheritance, polymorphism, encapsulation, access modifiers, and clean coding principles.",
                ],
                ja: [
                  "REST API Web Application（2022年7月）: Spring、Hibernate、JSP、MVC、Spring Securityを用いて、CRUD処理と認証を備えたEmployee Management Web Appを開発しました。",
                  "Spring MVC（2022年7月）: Spring、Hibernate、JSP、MVC、マッピングを用いて、Customer Management Web Appを構築しました。",
                  "Data Structures and Algorithms（2022年5月）: Queue、LinkedList、Stacks、BST、OOPs、クリーンコーディングを活用し、高層ビル建設スケジューリングおよび二分木変換課題に取り組みました。",
                  "Java OOPs（2022年3月）: 継承、多態性、カプセル化、アクセス修飾子、クリーンコーディングを用いて、部門管理システムを実装しました。",
                ],
              },
              documents: [
                {
                  title: {
                    en: "Certificate Link",
                    ja: "証明書リンク",
                  },
                },
              ],
            },
          ],
        },

        certifications: {
          label: "Certificates",
          type: "assets",
          items: [
            {
              title: {
                en: "Web Development Bootcamp",
                ja: "Web Development Bootcamp",
              },
              description: {
                en: "Learned HTML, CSS, Bootstrap 4, JavaScript, jQuery, Node.js, Express.js, and React.js. Also gained exposure to SQL, MongoDB, Firebase, and Google Cloud.",
                ja: "HTML、CSS、Bootstrap 4、JavaScript、jQuery、Node.js、Express.js、React.jsを学習し、さらにSQL、MongoDB、Firebase、Google Cloudにも触れました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Core Java",
                ja: "Core Java",
              },
              description: {
                en: "Completed Core Java certificate with exposure to Selenium, Cucumber Framework, and Manual Testing.",
                ja: "Core Java認定を修了し、Selenium、Cucumber Framework、Manual Testingにも触れました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Python",
                ja: "Python",
              },
              description: {
                en: "Worked on Virtual Assistant model, Object Tracking model, Face Detection model, and Face Recognition + Attendance model.",
                ja: "Virtual Assistantモデル、Object Trackingモデル、Face Detectionモデル、Face Recognition + Attendanceモデルに取り組みました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Node.js",
                ja: "Node.js",
              },
              description: {
                en: "Worked as a Node.js Developer and contributed to HouseHear project APIs.",
                ja: "Node.js Developerとして業務を行い、HouseHearプロジェクトのAPI開発に携わりました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Java OOPS",
                ja: "Java OOPS",
              },
              description: {
                en: "Certificate related to Java object-oriented programming foundations.",
                ja: "Javaのオブジェクト指向プログラミング基礎に関する認定です。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Vue.js and Nuxt.js",
                ja: "Vue.js and Nuxt.js",
              },
              description: {
                en: "Worked as NodeJS Developer and gained project exposure around Vue.js and Nuxt.js.",
                ja: "NodeJS開発者として業務を行い、Vue.jsおよびNuxt.js関連のプロジェクトにも携わりました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Hashcodec Project",
                ja: "Hashcodec Project",
              },
              description: {
                en: "Project exposure involving Vue.js, Nuxt.js, and Node.js for the Hashcodec website.",
                ja: "Vue.js、Nuxt.js、Node.jsを用いたHashcodecサイト関連のプロジェクト経験です。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Additional Certificate 8",
                ja: "追加証明書 8",
              },
              description: {
                en: "Add your certificate details here later.",
                ja: "後で証明書の詳細を追加できます。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Additional Certificate 9",
                ja: "追加証明書 9",
              },
              description: {
                en: "Add your certificate details here later.",
                ja: "後で証明書の詳細を追加できます。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Additional Certificate 10",
                ja: "追加証明書 10",
              },
              description: {
                en: "Add your certificate details here later.",
                ja: "後で証明書の詳細を追加できます。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
          ],
        },
      },
    },

    ja: {
      title: "Capgemini — エンタープライズ開発とバックエンド成長",
      subtitle:
        "実務でのバックエンド開発、API構築、講座を通じたスキル強化、そしてJavaバックエンド分野での土台が大きく伸びた時期です。",
      tabs: {
        experience: {
          label: "経験",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Capgemini",
                ja: "Capgemini",
              },
              role: {
                en: "Software Engineer • Pune, India",
                ja: "ソフトウェアエンジニア ・ プネ（インド）",
              },
              date: {
                en: "Jul 2021 – Dec 2022",
                ja: "2021年7月 – 2022年12月",
              },
              stack: {
                en: "Spring Boot, REST API, Database Integration, Java",
                ja: "Spring Boot、REST API、データベース連携、Java",
              },
              description: {
                en: "Worked in an enterprise software environment and contributed to backend development and dispute management systems.",
                ja: "エンタープライズ環境において、バックエンド開発および業務系システムに携わりました。",
              },
              contribution: {
                en: [
                  "Worked on the EPP Dispute Project to manage electronic transaction disputes.",
                  "Developed and maintained Spring Boot APIs.",
                  "Integrated backend services with databases.",
                ],
                ja: [
                  "電子取引に関する紛争管理を行うEPP Dispute Projectに携わりました。",
                  "Spring Boot APIの開発および保守を担当しました。",
                  "バックエンドサービスとデータベースの連携を行いました。",
                ],
              },
              impact: {
                en: [
                  "Strengthened enterprise backend development experience.",
                  "Built production-level confidence in Java and API development.",
                  "Added hands-on experience with real business systems.",
                ],
                ja: [
                  "エンタープライズ向けバックエンド開発の経験を強化しました。",
                  "JavaおよびAPI開発における実務レベルの自信を高めました。",
                  "実際の業務システムに関わる実践経験を積みました。",
                ],
              },
            },
          ],
        },

        projects: {
          label: "プロジェクト",
          type: "projectCards",
          items: [
            {
              title: {
                en: "EPP Dispute Project",
                ja: "EPP Dispute Project",
              },
              role: {
                en: "Enterprise Project",
                ja: "エンタープライズプロジェクト",
              },
              date: {
                en: "During Capgemini tenure",
                ja: "Capgemini在籍期間中",
              },
              stack: {
                en: "Spring Boot, REST API, Database",
                ja: "Spring Boot、REST API、データベース",
              },
              description: {
                en: "Worked on a project to manage electronic transaction disputes in an enterprise environment.",
                ja: "エンタープライズ環境において、電子取引紛争を管理するプロジェクトに携わりました。",
              },
              contribution: {
                en: [
                  "Developed backend APIs using Spring Boot.",
                  "Maintained application logic and database integration.",
                  "Supported enterprise workflow handling.",
                ],
                ja: [
                  "Spring Bootを用いたバックエンドAPIを開発しました。",
                  "業務ロジックおよびデータベース連携を担当しました。",
                  "エンタープライズ業務フローの対応を支援しました。",
                ],
              },
              impact: {
                en: [
                  "Built stronger backend ownership.",
                  "Improved practical experience in enterprise API development.",
                ],
                ja: [
                  "バックエンド開発に対する責任感をさらに高めました。",
                  "エンタープライズAPI開発の実務経験を深めました。",
                ],
              },
            },
            {
              title: {
                en: "Spring Boot API Development and Integration",
                ja: "Spring Boot API開発と連携",
              },
              role: {
                en: "Backend Engineering Work",
                ja: "バックエンド開発業務",
              },
              date: {
                en: "Jul 2021 – Dec 2022",
                ja: "2021年7月 – 2022年12月",
              },
              stack: {
                en: "Spring Boot, Java, Database Integration",
                ja: "Spring Boot、Java、データベース連携",
              },
              description: {
                en: "Focused on API development, backend logic, and database integration while building enterprise-grade applications.",
                ja: "エンタープライズ向けアプリケーションの開発において、API開発、バックエンドロジック、データベース連携に取り組みました。",
              },
              contribution: {
                en: [
                  "Built and maintained Spring Boot services.",
                  "Integrated application services with databases.",
                  "Contributed to backend system reliability.",
                ],
                ja: [
                  "Spring Bootサービスの開発および保守を行いました。",
                  "アプリケーションサービスとデータベースの連携を実施しました。",
                  "バックエンドシステムの安定性向上に貢献しました。",
                ],
              },
              impact: {
                en: [
                  "Expanded backend engineering confidence.",
                  "Prepared a strong base for future full-stack and enterprise work.",
                ],
                ja: [
                  "バックエンド開発に対する自信をさらに高めました。",
                  "今後のフルスタックおよびエンタープライズ開発につながる基盤を築きました。",
                ],
              },
            },
          ],
        },

        iit: {
          label: "INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE",
          type: "schoolEducation",
          items: [
            {
              level: {
                en: "Advanced Certificate Program in Back End Software Development",
                ja: "バックエンドソフトウェア開発 上級認定プログラム",
              },
              institution: {
                en: "Great Lakes / Indian Institute of Technology, Roorkee",
                ja: "Great Lakes / Indian Institute of Technology, Roorkee",
              },
              degreeLabel: {
                en: "Professional Certificate Program",
                ja: "専門認定プログラム",
              },
              year: "Jan 2022 – Mar 2023",
              scoreBadge: {
                en: "Professional Upskilling",
                ja: "専門スキル強化",
              },
              board: {
                en: "Back End Software Development",
                ja: "バックエンドソフトウェア開発",
              },
              stream: {
                en: "Java, Spring, Hibernate, MVC, REST API, DSA, OOPs",
                ja: "Java、Spring、Hibernate、MVC、REST API、DSA、OOPs",
              },
              result: {
                en: "Completed",
                ja: "修了",
              },
              score: {
                en: "Certificate Program",
                ja: "認定プログラム",
              },
              summary: {
                en: "Completed a structured backend development program that strengthened my Java, Spring, Hibernate, REST API, MVC, DSA, and OOPs foundation.",
                ja: "Java、Spring、Hibernate、REST API、MVC、DSA、OOPsの基盤を強化する体系的なバックエンド開発プログラムを修了しました。",
              },
              academicHighlights: {
                en: [
                  "Learned backend engineering with Java and Spring ecosystem.",
                  "Built project-based understanding across OOPs, DSA, MVC, and REST APIs.",
                  "Strengthened enterprise-ready backend development fundamentals.",
                ],
                ja: [
                  "JavaとSpringエコシステムによるバックエンド開発を学びました。",
                  "OOPs、DSA、MVC、REST APIをプロジェクトベースで理解しました。",
                  "実務に近いバックエンド開発の基礎力を強化しました。",
                ],
              },
              projectHighlights: {
                en: [
                  "REST API Web Application（2022年7月）: Spring、Hibernate、JSP、MVC、Spring Securityを用いて、CRUD処理と認証を備えたEmployee Management Web Appを開発しました。",
                  "Spring MVC（2022年7月）: Spring、Hibernate、JSP、MVC、マッピングを用いて、Customer Management Web Appを構築しました。",
                  "Data Structures and Algorithms（2022年5月）: Queue、LinkedList、Stacks、BST、OOPs、クリーンコーディングを活用し、高層ビル建設スケジューリングおよび二分木変換課題に取り組みました。",
                  "Java OOPs（2022年3月）: 継承、多態性、カプセル化、アクセス修飾子、クリーンコーディングを用いて、部門管理システムを実装しました。",
                ],
                ja: [
                  "REST API Web Application（2022年7月）: Spring、Hibernate、JSP、MVC、Spring Securityを用いて、CRUD処理と認証を備えたEmployee Management Web Appを開発しました。",
                  "Spring MVC（2022年7月）: Spring、Hibernate、JSP、MVC、マッピングを用いて、Customer Management Web Appを構築しました。",
                  "Data Structures and Algorithms（2022年5月）: Queue、LinkedList、Stacks、BST、OOPs、クリーンコーディングを活用し、高層ビル建設スケジューリングおよび二分木変換課題に取り組みました。",
                  "Java OOPs（2022年3月）: 継承、多態性、カプセル化、アクセス修飾子、クリーンコーディングを用いて、部門管理システムを実装しました。",
                ],
              },
              documents: [
                {
                  title: {
                    en: "Certificate Link",
                    ja: "証明書リンク",
                  },
                },
              ],
            },
          ],
        },

        certifications: {
          label: "証明書",
          type: "assets",
          items: [
            {
              title: {
                en: "Web Development Bootcamp",
                ja: "Web Development Bootcamp",
              },
              description: {
                en: "HTML, CSS, Bootstrap 4, JavaScript, jQuery, Node.js, Express.js, React.js, SQL, MongoDB, Firebase, Google Cloud.",
                ja: "HTML、CSS、Bootstrap 4、JavaScript、jQuery、Node.js、Express.js、React.js、SQL、MongoDB、Firebase、Google Cloudを学習しました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Core Java",
                ja: "Core Java",
              },
              description: {
                en: "Completed Core Java certificate with exposure to Selenium, Cucumber Framework, and Manual Testing.",
                ja: "Core Java認定を修了し、Selenium、Cucumber Framework、Manual Testingにも触れました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
            {
              title: {
                en: "Python",
                ja: "Python",
              },
              description: {
                en: "Worked on Virtual Assistant、Object Tracking、Face Detection、Face Recognition + Attendanceの各モデルに取り組みました。",
                ja: "Virtual Assistant、Object Tracking、Face Detection、Face Recognition + Attendanceの各モデルに取り組みました。",
              },
              placeholderLabel: {
                en: "Add certificate file",
                ja: "証明書ファイルを追加",
              },
            },
          ],
        },
      },
    },
  },
},

 { id: "msc",
  year: "MSc Years",
  content: {
    en: {
      title: "MSc Years — Advanced Learning, Strong Marks and Real Project Growth",
      subtitle:
        "A powerful two-year phase where academic performance, practical projects, internships, and professional readiness came together.",
      tabs: {
        education: {
          label: "Education",
          type: "schoolEducation",
          items: [
            {
              level: {
                en: "Master of Science (Computer Application)",
                ja: "理学修士（コンピュータ応用）",
              },
              institution: {
                en: "Modern College of Arts, Science and Commerce (Autonomous), Shivajinagar, Pune",
                ja: "モダン・カレッジ・オブ・アーツ・サイエンス・アンド・コマース（自治校、プネ）",
              },
              degreeLabel: {
                en: "Final Qualification",
                ja: "最終学位",
              },
              year: "2019 – 2021",
              scoreBadge: {
                en: "78.35% • CGPA 9.64",
                ja: "78.35% ・ CGPA 9.64",
              },
              board: {
                en: "Savitribai Phule Pune University / Progressive Education Society’s Modern College",
                ja: "サヴィトリバイ・プーレ・プネ大学 / Progressive Education Society’s Modern College",
              },
              stream: {
                en: "M.Sc. in Computer Application",
                ja: "M.Sc.（コンピュータ応用）",
              },
              result: {
                en: "First Class with Distinction",
                ja: "優秀成績で修了",
              },
              score: {
                en: "1567 / 2000",
                ja: "1567 / 2000",
              },
              summary: {
                en: "This two-year period became one of the most important phases of my academic and technical journey. My performance stayed strong, my practical confidence grew, and I moved from classroom learning toward real software development experience.",
                ja: "この2年間は、学業面でも技術面でも特に重要な時期でした。成績をしっかり維持しながら実践力も高まり、教室での学びから実際のソフトウェア開発経験へとつながる大きな転機になりました。",
              },
              academicHighlights: {
                en: [
                  "Completed MSc with strong overall performance and distinction.",
                  "Achieved 78.35% overall with CGPA 9.64.",
                  "Built a stronger foundation in programming, systems thinking, and real development work.",
                ],
                ja: [
                  "優秀な成績でMScを修了しました。",
                  "総合78.35%、CGPA 9.64を取得しました。",
                  "プログラミング、システム思考、そして実践的な開発力の基盤をさらに強化しました。",
                ],
              },
              projectHighlights: {
                en: [
                  "Built a voice-command based virtual assistant using Python and OpenCV.",
                  "Created a real-time object tracking project using OpenCV Python.",
                  "Completed internships in web development and software work during this period.",
                ],
                ja: [
                  "PythonとOpenCVを用いて、音声コマンド型のバーチャルアシスタントを開発しました。",
                  "OpenCV Pythonを用いたリアルタイム物体追跡プロジェクトを作成しました。",
                  "この時期にWeb開発およびソフトウェア分野のインターンシップを経験しました。",
                ],
              },
              documents: [
                {
                  url: mscPassingCertificateImg,
                  title: {
                    en: "View MSc Passing Certificate",
                    ja: "MSc修了証明書を見る",
                  },
                },
                {
                  url: mscDegreeCertificateImg,
                  title: {
                    en: "View MSc Degree Certificate",
                    ja: "MSc学位証明書を見る",
                  },
                },
              ],
            },

            {
              level: {
                en: "MSc First Year",
                ja: "MSc 1年次",
              },
              institution: {
                en: "Modern College of Arts, Science and Commerce, Shivajinagar, Pune",
                ja: "モダン・カレッジ・オブ・アーツ・サイエンス・アンド・コマース（プネ）",
              },
              degreeLabel: {
                en: "Semester I & II",
                ja: "第1学期・第2学期",
              },
              year: "2019 – 2020",
              scoreBadge: {
                en: "73.50%",
                ja: "73.50%",
              },
              board: {
                en: "M.Sc. Computer Application",
                ja: "M.Sc.（コンピュータ応用）",
              },
              stream: {
                en: "Sem I & II",
                ja: "第1学期・第2学期",
              },
              result: {
                en: "First Class with Distinction",
                ja: "優秀成績",
              },
              score: {
                en: "882 / 1200 • SGPA I: 9.02 • SGPA II: 9.68",
                ja: "882 / 1200 ・ SGPA I: 9.02 ・ SGPA II: 9.68",
              },
              summary: {
                en: "The first year gave me a strong academic base in software-related subjects and improved my confidence to move from theory toward practical development.",
                ja: "1年次では、ソフトウェア関連科目の基礎をしっかりと身につけ、理論から実践的な開発へ進む自信を育てることができました。",
              },
              academicHighlights: {
                en: [
                  "Built a strong base in software subjects and programming logic.",
                  "Improved academic performance across both semesters.",
                  "Prepared the foundation for stronger second-year project work.",
                ],
                ja: [
                  "ソフトウェア科目とプログラミング思考の基礎を固めました。",
                  "両学期を通して学業成績を伸ばしました。",
                  "2年次のより高度なプロジェクト実践につながる土台を整えました。",
                ],
              },
              projectHighlights: {
                en: [
                  "Developed a clear direction toward Python-based practical development.",
                  "Prepared the base for later AI and OpenCV-oriented project work.",
                ],
                ja: [
                  "Pythonを活用した実践開発への方向性が明確になりました。",
                  "後のAI・OpenCV系プロジェクトにつながる基盤を作りました。",
                ],
              },
              documents: [
                {
                  url: mscYear1CombinedImg,
                  title: {
                    en: "View MSc Year 1 Combined Marksheet",
                    ja: "MSc 1年次総合成績表を見る",
                  },
                },
              ],
            },

            {
              level: {
                en: "MSc Second Year",
                ja: "MSc 2年次",
              },
              institution: {
                en: "Modern College of Arts, Science and Commerce, Shivajinagar, Pune",
                ja: "モダン・カレッジ・オブ・アーツ・サイエンス・アンド・コマース（プネ）",
              },
              degreeLabel: {
                en: "Semester III & IV",
                ja: "第3学期・第4学期",
              },
              year: "2020 – 2021",
              scoreBadge: {
                en: "82.44%",
                ja: "82.44%",
              },
              board: {
                en: "M.Sc. Computer Application",
                ja: "M.Sc.（コンピュータ応用）",
              },
              stream: {
                en: "Sem III & IV",
                ja: "第3学期・第4学期",
              },
              result: {
                en: "First Class with Distinction",
                ja: "優秀成績",
              },
              score: {
                en: "742 / 900 • SGPA III: 9.86 • SGPA IV: 10.00",
                ja: "742 / 900 ・ SGPA III: 9.86 ・ SGPA IV: 10.00",
              },
              summary: {
                en: "This was the strongest phase of my MSc. My marks improved further, my projects became more meaningful, and I entered professional development through internship experience.",
                ja: "この時期はMScの中でも最も充実した段階でした。成績がさらに向上し、プロジェクトの内容も深まり、インターンシップを通して実務開発の経験にもつながりました。",
              },
              academicHighlights: {
                en: [
                  "Achieved stronger final-year performance with 82.44%.",
                  "Reached SGPA 9.86 and 10.00 across final semesters.",
                  "Combined academic strength with practical project execution.",
                ],
                ja: [
                  "最終年では82.44%を達成し、より高い成績を収めました。",
                  "最終学期ではSGPA 9.86と10.00を取得しました。",
                  "学業の成果と実践的なプロジェクト経験を両立しました。",
                ],
              },
              projectHighlights: {
                en: [
                  "Built a real-time object tracking project using Python and OpenCV.",
                  "Completed internship work in backend and web development.",
                  "Gained experience in APIs, web modules, database work, and practical development responsibilities.",
                ],
                ja: [
                  "PythonとOpenCVを用いてリアルタイム物体追跡プロジェクトを開発しました。",
                  "バックエンドおよびWeb開発分野でインターンシップを経験しました。",
                  "API、Webモジュール、データベース業務、実務に近い開発責任を経験しました。",
                ],
              },
              documents: [
                {
                  url: mscYear2CombinedImg,
                  title: {
                    en: "View MSc Year 2 Combined Marksheet",
                    ja: "MSc 2年次総合成績表を見る",
                  },
                },
              ],
            },
          ],
        },

        projects: {
          label: "Projects",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Virtual Assistant Based on Voice Commands",
                ja: "音声コマンド型バーチャルアシスタント",
              },
              role: {
                en: "Academic Project",
                ja: "学内プロジェクト",
              },
              date: {
                en: "2019 – 2020",
                ja: "2019年 – 2020年",
              },
              stack: {
                en: "Python, OpenCV",
                ja: "Python, OpenCV",
              },
              description: {
                en: "Developed a voice-command based virtual assistant using Python logic and computer-vision related experimentation.",
                ja: "Pythonのロジックとコンピュータビジョンに関連する実践を活かし、音声コマンドで動作するバーチャルアシスタントを開発しました。",
              },
              contribution: {
                en: [
                  "Designed the project flow for command-driven interaction.",
                  "Worked on Python-based functional behavior.",
                  "Explored practical implementation of intelligent response patterns.",
                ],
                ja: [
                  "コマンド駆動型の動作フローを設計しました。",
                  "Pythonを用いた機能実装を行いました。",
                  "知的な応答パターンの実装に取り組みました。",
                ],
              },
              impact: {
                en: [
                  "Shows early problem-solving mindset.",
                  "Demonstrates interest in intelligent systems.",
                  "Represents hands-on project execution beyond theory.",
                ],
                ja: [
                  "初期段階からの課題解決力を示しています。",
                  "知的システムへの関心を表しています。",
                  "理論だけでなく、実践的な開発経験を示す取り組みです。",
                ],
              },
            },
            {
              title: {
                en: "Real-time Object Tracking Using OpenCV Python",
                ja: "OpenCV Pythonによるリアルタイム物体追跡",
              },
              role: {
                en: "Academic Project",
                ja: "学内プロジェクト",
              },
              date: {
                en: "July 2021",
                ja: "2021年7月",
              },
              stack: {
                en: "Python, OpenCV",
                ja: "Python, OpenCV",
              },
              description: {
                en: "Built a project that allows an object to be selected on screen and tracked in real time.",
                ja: "画面上で対象物を選択し、リアルタイムで追跡できるプロジェクトを開発しました。",
              },
              contribution: {
                en: [
                  "Worked on object selection and real-time tracking flow.",
                  "Used Python and OpenCV for practical vision logic.",
                  "Focused on live behavior rather than only static detection.",
                ],
                ja: [
                  "対象物の選択とリアルタイム追跡の流れを実装しました。",
                  "PythonとOpenCVを用いて実践的な画像処理ロジックを扱いました。",
                  "静的検出だけでなく、動的な挙動を重視した設計を行いました。",
                ],
              },
              impact: {
                en: [
                  "Shows practical implementation of vision-based concepts.",
                  "Reflects technical curiosity and experimentation.",
                  "Strengthened project confidence before industry work.",
                ],
                ja: [
                  "画像処理の概念を実践的に実装した例です。",
                  "技術的な探究心と実験力を表しています。",
                  "実務に入る前のプロジェクト力を高めた経験です。",
                ],
              },
            },
          ],
        },

        internships: {
          label: "Internships",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Supero Software Pvt. Ltd.",
                ja: "Supero Software Pvt. Ltd.",
              },
              role: {
                en: "NodeJS Developer Intern / Backend-focused Web Development",
                ja: "NodeJS開発インターン / バックエンド中心のWeb開発",
              },
              date: {
                en: "23 Dec 2020 – 23 Jun 2021",
                ja: "2020年12月23日 – 2021年6月23日",
              },
              stack: {
                en: "NodeJS, VueJS, APIs, DBMS",
                ja: "NodeJS, VueJS, API, DBMS",
              },
              description: {
                en: "Completed a professional internship in web development where I worked on web application modules, API-related tasks, database-oriented work, and backend responsibilities using NodeJS.",
                ja: "Web開発分野において、Webアプリケーションのモジュール開発、API関連業務、データベース関連作業、そしてNodeJSを用いたバックエンド業務を担当する実務インターンシップを経験しました。",
              },
              contribution: {
                en: [
                  "Worked on web application modules in a professional environment.",
                  "Handled backend-oriented tasks using NodeJS.",
                  "Supported API development and database-related work.",
                  "Contributed to practical product work referenced in the internship certificate.",
                ],
                ja: [
                  "実務環境の中でWebアプリケーションのモジュール開発を担当しました。",
                  "NodeJSを用いたバックエンド寄りの業務を行いました。",
                  "API開発およびデータベース関連業務を担当しました。",
                  "インターンシップ証明書に記載のある実務プロジェクトにも関わりました。",
                ],
              },
              impact: {
                en: [
                  "Represents my transition from student projects to real software development work.",
                  "Shows backend responsibility, not only learning-level exposure.",
                  "Demonstrates real industry experience before full-time career growth.",
                ],
                ja: [
                  "学生プロジェクトから実務開発へ移行した重要な経験です。",
                  "学習段階にとどまらない、バックエンドの実務責任を示しています。",
                  "本格的なキャリア成長の前に得た、価値ある業界経験です。",
                ],
              },
              proofNote: {
                en: "Internship proof is available in the uploaded internship certificate PDF.",
                ja: "インターンシップの証明は、アップロード済みのインターンシップ証明書PDFで確認できます。",
              },
            },
            {
              title: {
                en: "Global Counter Terrorism Council",
                ja: "Global Counter Terrorism Council",
              },
              role: {
                en: "Software Developer / Web Developer / WordPress Developer",
                ja: "ソフトウェア開発者 / Web開発者 / WordPress開発者",
              },
              date: {
                en: "Nov 2020 • 1 month • Pune, India",
                ja: "2020年11月 ・ 1か月 ・ プネ（インド）",
              },
              stack: {
                en: "WordPress, Web Development",
                ja: "WordPress、Web開発",
              },
              description: {
                en: "Worked in a short-duration software and web development role, contributing as a Web Developer and WordPress Developer.",
                ja: "短期間のソフトウェア・Web開発業務において、Web DeveloperおよびWordPress Developerとして携わりました。",
              },
              contribution: {
                en: [
                  "Worked on website-related development tasks.",
                  "Supported web implementation using WordPress.",
                  "Contributed in a software development role during the internship period.",
                ],
                ja: [
                  "Webサイト関連の開発業務に携わりました。",
                  "WordPressを用いたWeb実装を支援しました。",
                  "インターン期間中、ソフトウェア開発者として業務に参加しました。",
                ],
              },
              impact: {
                en: [
                  "Added practical web-development exposure.",
                  "Strengthened confidence in professional software work.",
                  "Helped build early multi-role technical experience.",
                ],
                ja: [
                  "実践的なWeb開発経験を得ることができました。",
                  "実務に対する自信を高める経験となりました。",
                  "複数の役割を担う初期の技術経験につながりました。",
                ],
              },
            },
          ],
        },

        assets: {
          label: "Images / Documents",
          type: "assets",
          items: [
            {
              type: "image",
              url: mscYear1CombinedImg,
              title: {
                en: "MSc Year 1 Combined Marksheet",
                ja: "MSc 1年次総合成績表",
              },
              description: {
                en: "2019–2020 • 882 / 1200 • 73.50%",
                ja: "2019–2020 ・ 882 / 1200 ・ 73.50%",
              },
            },
            {
              type: "image",
              url: mscYear2CombinedImg,
              title: {
                en: "MSc Year 2 Combined Marksheet",
                ja: "MSc 2年次総合成績表",
              },
              description: {
                en: "2020–2021 • 742 / 900 • 82.44%",
                ja: "2020–2021 ・ 742 / 900 ・ 82.44%",
              },
            },
            {
              type: "image",
              url: mscPassingCertificateImg,
              title: {
                en: "MSc Passing Certificate",
                ja: "MSc修了証明書",
              },
              description: {
                en: "Passing certificate issued by Modern College.",
                ja: "Modern College発行の修了証明書です。",
              },
            },
            {
              type: "image",
              url: mscDegreeCertificateImg,
              title: {
                en: "MSc Degree Certificate",
                ja: "MSc学位証明書",
              },
              description: {
                en: "Degree certificate for Master of Science in Computer Application.",
                ja: "理学修士（コンピュータ応用）の学位証明書です。",
              },
            },
            {
              type: "pdf",
              url: internshipCertificatePdf,
              title: {
                en: "Internship Certificate — Supero Software Pvt. Ltd.",
                ja: "インターンシップ証明書 — Supero Software Pvt. Ltd.",
              },
              description: {
                en: "PDF internship certificate confirming internship duration and responsibilities.",
                ja: "インターンシップ期間および担当内容を確認できるPDF証明書です。",
              },
            },
            {
              title: {
                en: "Global Counter Terrorism Council Internship Proof",
                ja: "Global Counter Terrorism Council インターン証明",
              },
              description: {
                en: "Add internship proof or certificate here later.",
                ja: "後でインターン証明書や関連資料を追加できます。",
              },
              placeholderLabel: {
                en: "Add file later",
                ja: "あとで追加",
              },
            },
          ],
        },
      },
    },

    ja: {
      title: "MSc時代 — 高得点・実践力・プロジェクト成長の時期",
      subtitle:
        "高い学業成績、実践的なプロジェクト経験、インターンシップ、そして業界での準備が重なり、将来の方向性が大きく形づくられた2年間です。",
      tabs: {
        education: {
          label: "学歴",
          type: "schoolEducation",
          items: [
            {
              level: {
                en: "Master of Science (Computer Application)",
                ja: "理学修士（コンピュータ応用）",
              },
              institution: {
                en: "Modern College of Arts, Science and Commerce (Autonomous), Shivajinagar, Pune",
                ja: "モダン・カレッジ・オブ・アーツ・サイエンス・アンド・コマース（自治校、プネ）",
              },
              degreeLabel: {
                en: "Final Qualification",
                ja: "最終学位",
              },
              year: "2019 – 2021",
              scoreBadge: {
                en: "78.35% • CGPA 9.64",
                ja: "78.35% ・ CGPA 9.64",
              },
              board: {
                en: "Savitribai Phule Pune University / Progressive Education Society’s Modern College",
                ja: "サヴィトリバイ・プーレ・プネ大学 / Progressive Education Society’s Modern College",
              },
              stream: {
                en: "M.Sc. in Computer Application",
                ja: "M.Sc.（コンピュータ応用）",
              },
              result: {
                en: "First Class with Distinction",
                ja: "優秀成績で修了",
              },
              score: {
                en: "1567 / 2000",
                ja: "1567 / 2000",
              },
              summary: {
                en: "This two-year period became one of the most important phases of my academic and technical journey.",
                ja: "この2年間は、学業面でも技術面でも特に重要な時期でした。成績をしっかり維持しながら実践力も高まり、教室での学びから実際のソフトウェア開発経験へとつながる大きな転機になりました。",
              },
              academicHighlights: {
                en: [
                  "Completed MSc with strong overall performance and distinction.",
                  "Achieved 78.35% overall with CGPA 9.64.",
                  "Built a stronger foundation in programming, systems thinking, and real development work.",
                ],
                ja: [
                  "優秀な成績でMScを修了しました。",
                  "総合78.35%、CGPA 9.64を取得しました。",
                  "プログラミング、システム思考、そして実践的な開発力の基盤をさらに強化しました。",
                ],
              },
              projectHighlights: {
                en: [
                  "Built a voice-command based virtual assistant using Python and OpenCV.",
                  "Created a real-time object tracking project using OpenCV Python.",
                  "Completed internships in web development and software work during this period.",
                ],
                ja: [
                  "PythonとOpenCVを用いて、音声コマンド型のバーチャルアシスタントを開発しました。",
                  "OpenCV Pythonを用いたリアルタイム物体追跡プロジェクトを作成しました。",
                  "この時期にWeb開発およびソフトウェア分野のインターンシップを経験しました。",
                ],
              },
              documents: [
                {
                  url: mscPassingCertificateImg,
                  title: {
                    en: "View MSc Passing Certificate",
                    ja: "MSc修了証明書を見る",
                  },
                },
                {
                  url: mscDegreeCertificateImg,
                  title: {
                    en: "View MSc Degree Certificate",
                    ja: "MSc学位証明書を見る",
                  },
                },
              ],
            },
          ],
        },

        projects: {
          label: "プロジェクト",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Virtual Assistant Based on Voice Commands",
                ja: "音声コマンド型バーチャルアシスタント",
              },
              role: {
                en: "Academic Project",
                ja: "学内プロジェクト",
              },
              date: {
                en: "2019 – 2020",
                ja: "2019年 – 2020年",
              },
              stack: {
                en: "Python, OpenCV",
                ja: "Python, OpenCV",
              },
              description: {
                en: "Developed a voice-command based virtual assistant using Python logic and computer-vision related experimentation.",
                ja: "Pythonのロジックとコンピュータビジョンに関連する実践を活かし、音声コマンドで動作するバーチャルアシスタントを開発しました。",
              },
              contribution: {
                en: [
                  "Designed the project flow for command-driven interaction.",
                  "Worked on Python-based functional behavior.",
                  "Explored practical implementation of intelligent response patterns.",
                ],
                ja: [
                  "コマンド駆動型の動作フローを設計しました。",
                  "Pythonを用いた機能実装を行いました。",
                  "知的な応答パターンの実装に取り組みました。",
                ],
              },
              impact: {
                en: [
                  "Shows early problem-solving mindset.",
                  "Demonstrates interest in intelligent systems.",
                  "Represents hands-on project execution beyond theory.",
                ],
                ja: [
                  "初期段階からの課題解決力を示しています。",
                  "知的システムへの関心を表しています。",
                  "理論だけでなく、実践的な開発経験を示す取り組みです。",
                ],
              },
            },
            {
              title: {
                en: "Real-time Object Tracking Using OpenCV Python",
                ja: "OpenCV Pythonによるリアルタイム物体追跡",
              },
              role: {
                en: "Academic Project",
                ja: "学内プロジェクト",
              },
              date: {
                en: "July 2021",
                ja: "2021年7月",
              },
              stack: {
                en: "Python, OpenCV",
                ja: "Python, OpenCV",
              },
              description: {
                en: "Built a project that allows an object to be selected on screen and tracked in real time.",
                ja: "画面上で対象物を選択し、リアルタイムで追跡できるプロジェクトを開発しました。",
              },
              contribution: {
                en: [
                  "Worked on object selection and real-time tracking flow.",
                  "Used Python and OpenCV for practical vision logic.",
                  "Focused on live behavior rather than only static detection.",
                ],
                ja: [
                  "対象物の選択とリアルタイム追跡の流れを実装しました。",
                  "PythonとOpenCVを用いて実践的な画像処理ロジックを扱いました。",
                  "静的検出だけでなく、動的な挙動を重視した設計を行いました。",
                ],
              },
              impact: {
                en: [
                  "Shows practical implementation of vision-based concepts.",
                  "Reflects technical curiosity and experimentation.",
                  "Strengthened project confidence before industry work.",
                ],
                ja: [
                  "画像処理の概念を実践的に実装した例です。",
                  "技術的な探究心と実験力を表しています。",
                  "実務に入る前のプロジェクト力を高めた経験です。",
                ],
              },
            },
          ],
        },

        internships: {
          label: "インターンシップ",
          type: "projectCards",
          items: [
            {
              title: {
                en: "Supero Software Pvt. Ltd.",
                ja: "Supero Software Pvt. Ltd.",
              },
              role: {
                en: "NodeJS Developer Intern / Backend-focused Web Development",
                ja: "NodeJS開発インターン / バックエンド中心のWeb開発",
              },
              date: {
                en: "23 Dec 2020 – 23 Jun 2021",
                ja: "2020年12月23日 – 2021年6月23日",
              },
              stack: {
                en: "NodeJS, VueJS, APIs, DBMS",
                ja: "NodeJS, VueJS, API, DBMS",
              },
              description: {
                en: "Completed a professional internship in web development where I worked on web application modules, API-related tasks, database-oriented work, and backend responsibilities using NodeJS.",
                ja: "Web開発分野において、Webアプリケーションのモジュール開発、API関連業務、データベース関連作業、そしてNodeJSを用いたバックエンド業務を担当する実務インターンシップを経験しました。",
              },
              contribution: {
                en: [
                  "Worked on web application modules in a professional environment.",
                  "Handled backend-oriented tasks using NodeJS.",
                  "Supported API development and database-related work.",
                  "Contributed to practical product work referenced in the internship certificate.",
                ],
                ja: [
                  "実務環境の中でWebアプリケーションのモジュール開発を担当しました。",
                  "NodeJSを用いたバックエンド寄りの業務を行いました。",
                  "API開発およびデータベース関連業務を担当しました。",
                  "インターンシップ証明書に記載のある実務プロジェクトにも関わりました。",
                ],
              },
              impact: {
                en: [
                  "Represents my transition from student projects to real software development work.",
                  "Shows backend responsibility, not only learning-level exposure.",
                  "Demonstrates real industry experience before full-time career growth.",
                ],
                ja: [
                  "学生プロジェクトから実務開発へ移行した重要な経験です。",
                  "学習段階にとどまらない、バックエンドの実務責任を示しています。",
                  "本格的なキャリア成長の前に得た、価値ある業界経験です。",
                ],
              },
              proofNote: {
                en: "Internship proof is available in the uploaded internship certificate PDF.",
                ja: "インターンシップの証明は、アップロード済みのインターンシップ証明書PDFで確認できます。",
              },
            },
            {
              title: {
                en: "Global Counter Terrorism Council",
                ja: "Global Counter Terrorism Council",
              },
              role: {
                en: "Software Developer / Web Developer / WordPress Developer",
                ja: "ソフトウェア開発者 / Web開発者 / WordPress開発者",
              },
              date: {
                en: "Nov 2020 • 1 month • Pune, India",
                ja: "2020年11月 ・ 1か月 ・ プネ（インド）",
              },
              stack: {
                en: "WordPress, Web Development",
                ja: "WordPress、Web開発",
              },
              description: {
                en: "Worked in a short-duration software and web development role, contributing as a Web Developer and WordPress Developer.",
                ja: "短期間のソフトウェア・Web開発業務において、Web DeveloperおよびWordPress Developerとして携わりました。",
              },
              contribution: {
                en: [
                  "Worked on website-related development tasks.",
                  "Supported web implementation using WordPress.",
                  "Contributed in a software development role during the internship period.",
                ],
                ja: [
                  "Webサイト関連の開発業務に携わりました。",
                  "WordPressを用いたWeb実装を支援しました。",
                  "インターン期間中、ソフトウェア開発者として業務に参加しました。",
                ],
              },
              impact: {
                en: [
                  "Added practical web-development exposure.",
                  "Strengthened confidence in professional software work.",
                  "Helped build early multi-role technical experience.",
                ],
                ja: [
                  "実践的なWeb開発経験を得ることができました。",
                  "実務に対する自信を高める経験となりました。",
                  "複数の役割を担う初期の技術経験につながりました。",
                ],
              },
            },
          ],
        },

        assets: {
          label: "画像・資料",
          type: "assets",
          items: [
            {
              type: "image",
              url: mscYear1CombinedImg,
              title: {
                en: "MSc Year 1 Combined Marksheet",
                ja: "MSc 1年次総合成績表",
              },
              description: {
                en: "2019–2020 • 882 / 1200 • 73.50%",
                ja: "2019–2020 ・ 882 / 1200 ・ 73.50%",
              },
            },
            {
              type: "image",
              url: mscYear2CombinedImg,
              title: {
                en: "MSc Year 2 Combined Marksheet",
                ja: "MSc 2年次総合成績表",
              },
              description: {
                en: "2020–2021 • 742 / 900 • 82.44%",
                ja: "2020–2021 ・ 742 / 900 ・ 82.44%",
              },
            },
            {
              type: "image",
              url: mscPassingCertificateImg,
              title: {
                en: "MSc Passing Certificate",
                ja: "MSc修了証明書",
              },
              description: {
                en: "Passing certificate issued by Modern College.",
                ja: "Modern College発行の修了証明書です。",
              },
            },
            {
              type: "image",
              url: mscDegreeCertificateImg,
              title: {
                en: "MSc Degree Certificate",
                ja: "MSc学位証明書",
              },
              description: {
                en: "Degree certificate for Master of Science in Computer Application.",
                ja: "理学修士（コンピュータ応用）の学位証明書です。",
              },
            },
            {
              type: "pdf",
              url: internshipCertificatePdf,
              title: {
                en: "Internship Certificate — Supero Software Pvt. Ltd.",
                ja: "インターンシップ証明書 — Supero Software Pvt. Ltd.",
              },
              description: {
                en: "PDF internship certificate confirming internship duration and responsibilities.",
                ja: "インターンシップ期間および担当内容を確認できるPDF証明書です。",
              },
            },
            {
              title: {
                en: "Global Counter Terrorism Council Internship Proof",
                ja: "Global Counter Terrorism Council インターン証明",
              },
              description: {
                en: "Add internship proof or certificate here later.",
                ja: "後でインターン証明書や関連資料を追加できます。",
              },
              placeholderLabel: {
                en: "Add file later",
                ja: "あとで追加",
              },
            },
          ],
        },
      },
    },
  },
},

  {id: "bsc",year: "BSc Years",content: {en: {title: "BSc Years — Science, Skill Building and Academic Growth",subtitle:"A meaningful three-year journey of science education, practical learning, certifications, and the foundation of my technical career.",

  tabs: {
    education: {
      label: "Education",
      type: "schoolEducation",
      items: [
        {
          level: {
            en: "Bachelor of Science Degree",
            ja: "理学士の学位",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "Summer 2019 • Degree awarded on 20 December 2019",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "First Division",
            ja: "第一等級",
          },
          result: {
            en: "Completed",
            ja: "修了",
          },
          score: {
            en: "Overall: 1644 / 2700 • 60.89%",
            ja: "合計: 1644 / 2700 • 60.89%",
          },
          summary: {
            en: "Bachelor of Science degree awarded by Sant Gadge Baba Amravati University after successfully passing the examination in Summer 2019 with First Division.",
            ja: "2019年夏の試験に合格し、第一等級で理学士の学位を受けました。",
          },
          documents: [
            {
              url: bscDegreeCertificateImg,
              title: {
                en: "View BSc Degree Certificate",
                ja: "BSc 学位証明書を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc First Year",
            ja: "BSc 1年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "Winter 2016 – Winter 2017",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass",
            ja: "合格",
          },
          score: {
            en: "529 / 900 • 58.78%",
            ja: "529 / 900 • 58.78%",
          },
          summary: {
            en: "This year built the academic foundation of my BSc journey with strong focus on science subjects and practical learning.",
            ja: "この年はBScの土台を作りました。理科の科目と実習を学びました。",
          },
          documents: [
            {
              url: bscSem1Img,
              title: {
                en: "View Semester I Marksheet",
                ja: "第1学期の成績を見る",
              },
            },
            {
              url: bscSem2Img,
              title: {
                en: "View Semester II Marksheet",
                ja: "第2学期の成績を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc Second Year",
            ja: "BSc 2年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "Winter 2017 – Summer 2018",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass",
            ja: "合格",
          },
          score: {
            en: "554 / 900 • 61.56%",
            ja: "554 / 900 • 61.56%",
          },
          summary: {
            en: "Second year improved my subject depth, practical work, and confidence in technical studies.",
            ja: "2年生で科目の理解と実習の力が強くなりました。",
          },
          documents: [
            {
              url: bscSem3Img,
              title: {
                en: "View Semester III Marksheet",
                ja: "第3学期の成績を見る",
              },
            },
            {
              url: bscSem4Img,
              title: {
                en: "View Semester IV Marksheet",
                ja: "第4学期の成績を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc Third Year",
            ja: "BSc 3年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "Winter 2018 – Summer 2019",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass — First Division",
            ja: "合格 — 第一等級",
          },
          score: {
            en: "561 / 900 • 62.33%",
            ja: "561 / 900 • 62.33%",
          },
          summary: {
            en: "The final year completed my BSc journey. During this period, I also worked on projects and shaped my direction toward software and technical growth.",
            ja: "最終年でBScを修了しました。この時期にプロジェクトも行い、技術の道がはっきりしました。",
          },
          documents: [
            {
              url: bscSem5Img,
              title: {
                en: "View Semester V Marksheet",
                ja: "第5学期の成績を見る",
              },
            },
            {
              url: bscSem6Img,
              title: {
                en: "View Semester VI Marksheet",
                ja: "第6学期の成績を見る",
              },
            },
          ],
        },
      ],
    },

    projects: {
      label: "Projects",
      items: [
        "Construction of Electronic Power Supply",
        "Test Your C Skills",
        "Web Development with PHP and Game",
        "Portfolio Website (BSc 3rd Year)",
      ],
    },

    achievements: {
      label: "Achievements",
      type: "achievementHighlights",
      highlights: [
        {
          value: "3",
          label: {
            en: "Main recognitions",
            ja: "主な実績",
          },
        },
        {
          value: "11",
          label: {
            en: "Certificates",
            ja: "資格数",
          },
        },
        {
          value: "60.89%",
          label: {
            en: "Overall BSc percentage",
            ja: "BSc 合計点",
          },
        },
      ],
      items: [
        {
          title: {
            en: "Microsoft Office Specialist — Excel (2017)",
            ja: "Microsoft Excel 資格（2017）",
          },
          description: {
            en: "Recognized for Excel skills and practical digital productivity knowledge.",
            ja: "Excel のスキルが認められました。",
          },
        },
        {
          title: {
            en: "Avishkar Certificate (2017)",
            ja: "Avishkar 証明書（2017）",
          },
          description: {
            en: "Participated in presentation and idea-based academic activity.",
            ja: "発表とアイデアの活動に参加しました。",
          },
        },
        {
          title: {
            en: "Cisco Networking Labs — iMedita",
            ja: "Cisco Networking Labs — iMedita",
          },
          description: {
            en: "Built early networking confidence through technical lab learning.",
            ja: "ネットワークの勉強で自信がつきました。",
          },
        },
      ],
    },

    certifications: {
      label: "Certificates",
      type: "assets",
      items: [
        {
          type: "image",
          url: mosExcelImg,
          title: {
            en: "Microsoft Office Specialist — Excel (2017)",
            ja: "Microsoft Excel 資格（2017）",
          },
          description: {
            en: "Excel specialist certificate earned during BSc years.",
            ja: "BSc時代に取った Excel の資格です。",
          },
        },
        {
          type: "image",
          url: avishkarImg,
          title: {
            en: "Avishkar Certificate (2017)",
            ja: "Avishkar 証明書（2017）",
          },
          description: {
            en: "Certificate for academic innovation and presentation participation.",
            ja: "発表とアイデア活動の証明書です。",
          },
        },
        {
          type: "image",
          url: ciscoLabsImg,
          title: {
            en: "Cisco Networking Labs — iMedita",
            ja: "Cisco Networking Labs — iMedita",
          },
          description: {
            en: "Networking lab training certificate.",
            ja: "ネットワーク研修の証明書です。",
          },
        },
        {
          type: "image",
          url: cosmeticBeautyImg,
          title: {
            en: "Cosmetic Manufacturing and Beauty Parlour (2018)",
            ja: "美容・化粧品制作（2018）",
          },
          description: {
            en: "Skill-based course certificate.",
            ja: "スキル講座の証明書です。",
          },
        },
        {
          type: "image",
          url: powerpointStateImg,
          title: {
            en: "State Level PowerPoint Presentation Competition (2019)",
            ja: "州レベル PowerPoint 発表大会（2019）",
          },
          description: {
            en: "Presentation competition certificate.",
            ja: "発表大会の証明書です。",
          },
        },
        {
          type: "image",
          url: electronicPowerSupplyImg,
          title: {
            en: "Construction of Electronic Power Supply",
            ja: "電子電源の制作",
          },
          description: {
            en: "Technical project / certificate.",
            ja: "技術プロジェクトの証明書です。",
          },
        },
        {
          type: "image",
          url: cSkillsImg,
          title: {
            en: "Test Your C Skills",
            ja: "C言語スキルテスト",
          },
          description: {
            en: "Programming skill certificate.",
            ja: "C言語の証明書です。",
          },
        },
        {
          type: "image",
          url: seminarUniversityImg,
          title: {
            en: "Seminar Competition at University Level",
            ja: "大学レベル セミナー大会",
          },
          description: {
            en: "University seminar participation certificate.",
            ja: "大学セミナー参加の証明書です。",
          },
        },
        {
          type: "image",
          url: cloudDigitalImg,
          title: {
            en: "Cloud Computing & Digital Marketing",
            ja: "クラウドとデジタルマーケティング",
          },
          description: {
            en: "Technology and digital learning certificate.",
            ja: "技術学習の証明書です。",
          },
        },
        {
          type: "image",
          url: phpGameImg,
          title: {
            en: "Web Development with PHP and Game",
            ja: "PHPとゲームのWeb開発",
          },
          description: {
            en: "Web development certificate.",
            ja: "Web開発の証明書です。",
          },
        },
        {
          type: "image",
          url: ciscoCyberImg,
          title: {
            en: "Cisco Networking and Cyber Security",
            ja: "Cisco ネットワークとサイバーセキュリティ",
          },
          description: {
            en: "Networking and cyber security certificate.",
            ja: "ネットワークとセキュリティの証明書です。",
          },
        },
      ],
    },

    assets: {
      label: "Images / Documents",
      type: "assets",
      items: [
        {
          type: "image",
          url: bscDegreeCertificateImg,
          title: {
            en: "BSc Degree Certificate",
            ja: "BSc 学位証明書",
          },
          description: {
            en: "Degree awarded in 2019 with First Division",
            ja: "2019年・第一等級",
          },
        },
        {
          type: "image",
          url: bscSem1Img,
          title: {
            en: "Semester I Marksheet",
            ja: "第1学期 成績",
          },
          description: {
            en: "Winter 2016",
            ja: "2016年冬",
          },
        },
        {
          type: "image",
          url: bscSem2Img,
          title: {
            en: "Semester II Marksheet",
            ja: "第2学期 成績",
          },
          description: {
            en: "Winter 2017",
            ja: "2017年冬",
          },
        },
        {
          type: "image",
          url: bscSem3Img,
          title: {
            en: "Semester III Marksheet",
            ja: "第3学期 成績",
          },
          description: {
            en: "Winter 2017",
            ja: "2017年冬",
          },
        },
        {
          type: "image",
          url: bscSem4Img,
          title: {
            en: "Semester IV Marksheet",
            ja: "第4学期 成績",
          },
          description: {
            en: "Summer 2018",
            ja: "2018年夏",
          },
        },
        {
          type: "image",
          url: bscSem5Img,
          title: {
            en: "Semester V Marksheet",
            ja: "第5学期 成績",
          },
          description: {
            en: "Winter 2018",
            ja: "2018年冬",
          },
        },
        {
          type: "image",
          url: bscSem6Img,
          title: {
            en: "Semester VI Marksheet",
            ja: "第6学期 成績",
          },
          description: {
            en: "Summer 2019",
            ja: "2019年夏",
          },
        },
      ],
    },
  },
},

ja: {
  title: "BSc時代 — 学び・実習・成長",
  subtitle:
    "3年間で理科、実習、PCスキル、技術の土台を作った大切な時期です。",

  tabs: {
    education: {
      label: "学歴",
      type: "schoolEducation",
      items: [
        {
          level: {
            en: "Bachelor of Science Degree",
            ja: "理学士の学位",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "2019年夏・2019年12月20日",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "First Division",
            ja: "第一等級",
          },
          result: {
            en: "Completed",
            ja: "修了",
          },
          score: {
            en: "Overall: 1644 / 2700 • 60.89%",
            ja: "合計: 1644 / 2700 • 60.89%",
          },
          summary: {
            en: "Bachelor of Science degree awarded by Sant Gadge Baba Amravati University after successfully passing the examination in Summer 2019 with First Division.",
            ja: "2019年夏の試験に合格して、第一等級で理学士の学位を受けました。",
          },
          documents: [
            {
              url: bscDegreeCertificateImg,
              title: {
                en: "View BSc Degree Certificate",
                ja: "BSc 学位証明書を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc First Year",
            ja: "BSc 1年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "2016年冬 – 2017年冬",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass",
            ja: "合格",
          },
          score: {
            en: "529 / 900 • 58.78%",
            ja: "529 / 900 • 58.78%",
          },
          summary: {
            en: "This year built the academic foundation of my BSc journey with strong focus on science subjects and practical learning.",
            ja: "この年はBScの土台を作りました。理科と実習を学びました。",
          },
          documents: [
            {
              url: bscSem1Img,
              title: {
                en: "View Semester I Marksheet",
                ja: "第1学期の成績を見る",
              },
            },
            {
              url: bscSem2Img,
              title: {
                en: "View Semester II Marksheet",
                ja: "第2学期の成績を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc Second Year",
            ja: "BSc 2年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "2017年冬 – 2018年夏",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass",
            ja: "合格",
          },
          score: {
            en: "554 / 900 • 61.56%",
            ja: "554 / 900 • 61.56%",
          },
          summary: {
            en: "Second year improved my subject depth, practical work, and confidence in technical studies.",
            ja: "2年生で科目の理解と実習の力が強くなりました。",
          },
          documents: [
            {
              url: bscSem3Img,
              title: {
                en: "View Semester III Marksheet",
                ja: "第3学期の成績を見る",
              },
            },
            {
              url: bscSem4Img,
              title: {
                en: "View Semester IV Marksheet",
                ja: "第4学期の成績を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "BSc Third Year",
            ja: "BSc 3年",
          },
          institution: {
            en: "Sant Gadge Baba Amravati University",
            ja: "サント・ガジェ・ババ・アムラヴァティ大学",
          },
          year: "2018年冬 – 2019年夏",
          board: {
            en: "Bachelor of Science",
            ja: "理学士",
          },
          stream: {
            en: "Physics, Mathematics, Computer Science",
            ja: "物理・数学・コンピューター",
          },
          result: {
            en: "Pass — First Division",
            ja: "合格 — 第一等級",
          },
          score: {
            en: "561 / 900 • 62.33%",
            ja: "561 / 900 • 62.33%",
          },
          summary: {
            en: "The final year completed my BSc journey and shaped my direction toward technical growth.",
            ja: "最終年でBScを修了し、技術の道が見えました。",
          },
          documents: [
            {
              url: bscSem5Img,
              title: {
                en: "View Semester V Marksheet",
                ja: "第5学期の成績を見る",
              },
            },
            {
              url: bscSem6Img,
              title: {
                en: "View Semester VI Marksheet",
                ja: "第6学期の成績を見る",
              },
            },
          ],
        },
      ],
    },

    projects: {
      label: "プロジェクト",
      items: [
        "Construction of Electronic Power Supply",
        "Test Your C Skills",
        "Web Development with PHP and Game",
        "Portfolio Website（BSc 3年）",
      ],
    },

    achievements: {
      label: "実績",
      type: "achievementHighlights",
      highlights: [
        {
          value: "3",
          label: {
            en: "Main recognitions",
            ja: "主な実績",
          },
        },
        {
          value: "11",
          label: {
            en: "Certificates",
            ja: "資格数",
          },
        },
        {
          value: "60.89%",
          label: {
            en: "Overall BSc percentage",
            ja: "BSc 合計点",
          },
        },
      ],
      items: [
        {
          title: {
            en: "Microsoft Office Specialist — Excel (2017)",
            ja: "Microsoft Excel 資格（2017）",
          },
          description: {
            en: "Recognized for Excel skills and practical digital productivity knowledge.",
            ja: "Excel のスキルが認められました。",
          },
        },
        {
          title: {
            en: "Avishkar Certificate (2017)",
            ja: "Avishkar 証明書（2017）",
          },
          description: {
            en: "Participated in presentation and idea-based academic activity.",
            ja: "発表活動に参加しました。",
          },
        },
        {
          title: {
            en: "Cisco Networking Labs — iMedita",
            ja: "Cisco Networking Labs — iMedita",
          },
          description: {
            en: "Built early networking confidence through technical lab learning.",
            ja: "ネットワークの勉強をしました。",
          },
        },
      ],
    },

    certifications: {
      label: "証明書",
      type: "assets",
      items: [
        {
          type: "image",
          url: mosExcelImg,
          title: {
            en: "Microsoft Office Specialist — Excel (2017)",
            ja: "Microsoft Excel 資格（2017）",
          },
          description: {
            en: "Excel specialist certificate earned during BSc years.",
            ja: "BSc時代に取った Excel の資格です。",
          },
        },
        {
          type: "image",
          url: avishkarImg,
          title: {
            en: "Avishkar Certificate (2017)",
            ja: "Avishkar 証明書（2017）",
          },
          description: {
            en: "Certificate for academic innovation and presentation participation.",
            ja: "発表とアイデア活動の証明書です。",
          },
        },
        {
          type: "image",
          url: ciscoLabsImg,
          title: {
            en: "Cisco Networking Labs — iMedita",
            ja: "Cisco Networking Labs — iMedita",
          },
          description: {
            en: "Networking lab training certificate.",
            ja: "ネットワーク研修の証明書です。",
          },
        },
        {
          type: "image",
          url: cosmeticBeautyImg,
          title: {
            en: "Cosmetic Manufacturing and Beauty Parlour (2018)",
            ja: "美容・化粧品制作（2018）",
          },
          description: {
            en: "Skill-based course certificate.",
            ja: "スキル講座の証明書です。",
          },
        },
        {
          type: "image",
          url: powerpointStateImg,
          title: {
            en: "State Level PowerPoint Presentation Competition (2019)",
            ja: "州レベル PowerPoint 発表大会（2019）",
          },
          description: {
            en: "Presentation competition certificate.",
            ja: "発表大会の証明書です。",
          },
        },
        {
          type: "image",
          url: electronicPowerSupplyImg,
          title: {
            en: "Construction of Electronic Power Supply",
            ja: "電子電源の制作",
          },
          description: {
            en: "Technical project / certificate.",
            ja: "技術プロジェクトの証明書です。",
          },
        },
        {
          type: "image",
          url: cSkillsImg,
          title: {
            en: "Test Your C Skills",
            ja: "C言語スキルテスト",
          },
          description: {
            en: "Programming skill certificate.",
            ja: "C言語の証明書です。",
          },
        },
        {
          type: "image",
          url: seminarUniversityImg,
          title: {
            en: "Seminar Competition at University Level",
            ja: "大学レベル セミナー大会",
          },
          description: {
            en: "University seminar participation certificate.",
            ja: "大学セミナー参加の証明書です。",
          },
        },
        {
          type: "image",
          url: cloudDigitalImg,
          title: {
            en: "Cloud Computing & Digital Marketing",
            ja: "クラウドとデジタルマーケティング",
          },
          description: {
            en: "Technology and digital learning certificate.",
            ja: "技術学習の証明書です。",
          },
        },
        {
          type: "image",
          url: phpGameImg,
          title: {
            en: "Web Development with PHP and Game",
            ja: "PHPとゲームのWeb開発",
          },
          description: {
            en: "Web development certificate.",
            ja: "Web開発の証明書です。",
          },
        },
        {
          type: "image",
          url: ciscoCyberImg,
          title: {
            en: "Cisco Networking and Cyber Security",
            ja: "Cisco ネットワークとサイバーセキュリティ",
          },
          description: {
            en: "Networking and cyber security certificate.",
            ja: "ネットワークとセキュリティの証明書です。",
          },
        },
      ],
    },

    assets: {
      label: "画像・資料",
      type: "assets",
      items: [
        {
          type: "image",
          url: bscDegreeCertificateImg,
          title: {
            en: "BSc Degree Certificate",
            ja: "BSc 学位証明書",
          },
          description: {
            en: "Degree awarded in 2019 with First Division",
            ja: "2019年・第一等級",
          },
        },
        {
          type: "image",
          url: bscSem1Img,
          title: {
            en: "Semester I Marksheet",
            ja: "第1学期 成績",
          },
          description: {
            en: "Winter 2016",
            ja: "2016年冬",
          },
        },
        {
          type: "image",
          url: bscSem2Img,
          title: {
            en: "Semester II Marksheet",
            ja: "第2学期 成績",
          },
          description: {
            en: "Winter 2017",
            ja: "2017年冬",
          },
        },
        {
          type: "image",
          url: bscSem3Img,
          title: {
            en: "Semester III Marksheet",
            ja: "第3学期 成績",
          },
          description: {
            en: "Winter 2017",
            ja: "2017年冬",
          },
        },
        {
          type: "image",
          url: bscSem4Img,
          title: {
            en: "Semester IV Marksheet",
            ja: "第4学期 成績",
          },
          description: {
            en: "Summer 2018",
            ja: "2018年夏",
          },
        },
        {
          type: "image",
          url: bscSem5Img,
          title: {
            en: "Semester V Marksheet",
            ja: "第5学期 成績",
          },
          description: {
            en: "Winter 2018",
            ja: "2018年冬",
          },
        },
        {
          type: "image",
          url: bscSem6Img,
          title: {
            en: "Semester VI Marksheet",
            ja: "第6学期 成績",
          },
          description: {
            en: "Summer 2019",
            ja: "2019年夏",
          },
        },
      ],
    },
  },
},

},},

{id: "early",year: "School Years",content: {en: {title: "School Years — Education, Sports and Foundations",subtitle:"The stage where discipline, academics, sportsmanship, and creativity began shaping my personality and future journey.",tabs: {education: {label: "Education",type: "schoolEducation",items: [{level: {en: "12th Standard",ja: "12年生",},institution: {en: "Higher Secondary Education",ja: "高校教育",},year: "February 2016",board: {en: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",ja: "マハラシュトラ州教育委員会（プネ）",},stream: {en: "Science",ja: "理系",},result: {en: "Pass",ja: "合格",},score: {en: "396 / 650 — 60.92%",ja: "396 / 650 — 60.92%",},summary: {en: "Completed 12th standard in Science stream. This phase improved my thinking, discipline, and readiness for higher studies.",ja: "12年生を理系で修了しました。この時期に、考える力と規律、そして進学の準備ができました。",},documents: [{url: twelfthMarksheetImg,title: {en: "View 12th Marksheet",ja: "12年の成績を見る",},},],},{level: {en: "10th Standard",ja: "10年生",},institution: {en: "Secondary School Education",ja: "中学校教育",},year: "March 2014",board: {en: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",ja: "マハラシュトラ州教育委員会（プネ）",},stream: {en: "",ja: "",},result: {en: "Distinction",ja: "優秀",},score: {en: "423 / 500 — 84.60%",ja: "423 / 500 — 84.60%",},summary: {en: "Completed 10th standard with distinction. This was an important stage that built a strong academic base and confidence.",ja: "10年生を優秀で修了しました。この時期に、学びの土台と自信ができました。",},documents: [{url: tenthCertificateImg,title: {en: "View 10th Certificate",ja: "10年の証明書を見る",},},{url: tenthMarksheetImg,title: {en: "View 10th Marksheet",ja: "10年の成績を見る",},},],},],},

    projects: {
      label: "Projects",
      items: [],
    },

    achievements: {
      label: "Achievements",
      type: "achievementHighlights",
      highlights: [
        {
          value: "3",
          label: {
            en: "Football state-level appearances",
            ja: "州のサッカー大会",
          },
        },
        {
          value: "1",
          label: {
            en: "District runner achievement",
            ja: "地区ランナー賞",
          },
        },
        {
          value: "2",
          label: {
            en: "Painting certificates",
            ja: "絵の資格",
          },
        },
      ],
      items: [
        {
          title: {
            en: "Football — State Level Participation",
            ja: "サッカー — 州大会",
          },
          description: {
            en: "Participated in football at state level three times. It taught me teamwork, discipline, and mental strength.",
            ja: "州のサッカー大会に3回出ました。チームワークと規律、強い心を学びました。",
          },
        },
        {
          title: {
            en: "District Runner Achievement",
            ja: "地区ランナー実績",
          },
          description: {
            en: "Earned recognition at district level through effort, consistency, and strong sports performance.",
            ja: "努力と継続で、地区レベルの実績を取りました。",
          },
        },
        {
          title: {
            en: "Painting Certifications",
            ja: "絵の資格",
          },
          description: {
            en: "Completed elementary and intermediate painting certifications, showing my creative side from early years.",
            ja: "絵の初級と中級の資格を取りました。子どもの時から創造力がありました。",
          },
        },
      ],
    },

    certifications: {
      label: "Certificates",
      type: "certificateGallery",
      items: [
        {
          type: "image",
          url: tenthCertificateImg,
          title: {
            en: "10th School Certificate",
            ja: "10年の証明書",
          },
          description: {
            en: "Secondary School Certificate — March 2014",
            ja: "中学証明書 — 2014年3月",
          },
        },
        {
          type: "image",
          url: tenthMarksheetImg,
          title: {
            en: "10th Marksheet",
            ja: "10年の成績",
          },
          description: {
            en: "84.60% with distinction",
            ja: "84.60%・優秀",
          },
        },
        {
          type: "image",
          url: twelfthMarksheetImg,
          title: {
            en: "12th Marksheet",
            ja: "12年の成績",
          },
          description: {
            en: "Science stream — February 2016 — 60.92%",
            ja: "理系 — 2016年2月 — 60.92%",
          },
        },
        {
          type: "image",
          url: footballState1Img,
          title: {
            en: "Football State Certificate 1",
            ja: "サッカー州証明書 1",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: footballState2Img,
          title: {
            en: "Football State Certificate 2",
            ja: "サッカー州証明書 2",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: footballState3Img,
          title: {
            en: "Football State Certificate 3",
            ja: "サッカー州証明書 3",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: runnerDistrictImg,
          title: {
            en: "District Runner Certificate",
            ja: "地区ランナー証明書",
          },
          description: {
            en: "District-level sports certificate",
            ja: "地区大会の証明書",
          },
        },
        {
          type: "image",
          url: paintingElementaryImg,
          title: {
            en: "Painting Elementary Certificate",
            ja: "絵の初級資格",
          },
          description: {
            en: "Elementary drawing certificate",
            ja: "絵の初級証明書",
          },
        },
        {
          type: "image",
          url: paintingIntermediateImg,
          title: {
            en: "Painting Intermediate Certificate",
            ja: "絵の中級資格",
          },
          description: {
            en: "Intermediate drawing certificate",
            ja: "絵の中級証明書",
          },
        },
      ],
    },

    assets: {
      label: "Images / Documents",
      type: "assets",
      items: [],
    },
  },
},

ja: {
  title: "学生時代 — 学校・スポーツ・土台",
  subtitle:
    "学校、スポーツ、創造力で、今の自分の土台ができた大切な時期です。",
  tabs: {
    education: {
      label: "学歴",
      type: "schoolEducation",
      items: [
        {
          level: {
            en: "12th Standard",
            ja: "12年生",
          },
          institution: {
            en: "Higher Secondary Education",
            ja: "高校教育",
          },
          year: "2016年2月",
          board: {
            en: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
            ja: "マハラシュトラ州教育委員会（プネ）",
          },
          stream: {
            en: "Science",
            ja: "理系",
          },
          result: {
            en: "Pass",
            ja: "合格",
          },
          score: {
            en: "396 / 650 — 60.92%",
            ja: "396 / 650 — 60.92%",
          },
          summary: {
            en: "Completed 12th standard in Science stream. This phase improved my thinking, discipline, and readiness for higher studies.",
            ja: "12年生を理系で修了しました。この時期に、考える力と規律、進学の準備ができました。",
          },
          documents: [
            {
              url: twelfthMarksheetImg,
              title: {
                en: "View 12th Marksheet",
                ja: "12年の成績を見る",
              },
            },
          ],
        },
        {
          level: {
            en: "10th Standard",
            ja: "10年生",
          },
          institution: {
            en: "Secondary School Education",
            ja: "中学校教育",
          },
          year: "2014年3月",
          board: {
            en: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
            ja: "マハラシュトラ州教育委員会（プネ）",
          },
          stream: {
            en: "",
            ja: "",
          },
          result: {
            en: "Distinction",
            ja: "優秀",
          },
          score: {
            en: "423 / 500 — 84.60%",
            ja: "423 / 500 — 84.60%",
          },
          summary: {
            en: "Completed 10th standard with distinction. This was an important stage that built a strong academic base and confidence.",
            ja: "10年生を優秀で修了しました。この時期に、学びの土台と自信ができました。",
          },
          documents: [
            {
              url: tenthCertificateImg,
              title: {
                en: "View 10th Certificate",
                ja: "10年の証明書を見る",
              },
            },
            {
              url: tenthMarksheetImg,
              title: {
                en: "View 10th Marksheet",
                ja: "10年の成績を見る",
              },
            },
          ],
        },
      ],
    },

    projects: {
      label: "プロジェクト",
      items: [],
    },

    achievements: {
      label: "実績",
      type: "achievementHighlights",
      highlights: [
        {
          value: "3",
          label: {
            en: "Football state-level appearances",
            ja: "州のサッカー大会",
          },
        },
        {
          value: "1",
          label: {
            en: "District runner achievement",
            ja: "地区ランナー賞",
          },
        },
        {
          value: "2",
          label: {
            en: "Painting certificates",
            ja: "絵の資格",
          },
        },
      ],
      items: [
        {
          title: {
            en: "Football — State Level Participation",
            ja: "サッカー — 州大会",
          },
          description: {
            en: "Participated in football at state level three times. It taught me teamwork, discipline, and mental strength.",
            ja: "州のサッカー大会に3回出ました。チームワークと規律、強い心を学びました。",
          },
        },
        {
          title: {
            en: "District Runner Achievement",
            ja: "地区ランナー実績",
          },
          description: {
            en: "Earned recognition at district level through effort, consistency, and strong sports performance.",
            ja: "努力と継続で、地区レベルの実績を取りました。",
          },
        },
        {
          title: {
            en: "Painting Certifications",
            ja: "絵の資格",
          },
          description: {
            en: "Completed elementary and intermediate painting certifications, showing my creative side from early years.",
            ja: "絵の初級と中級の資格を取りました。子どもの時から創造力がありました。",
          },
        },
      ],
    },

    certifications: {
      label: "証明書",
      type: "certificateGallery",
      items: [
        {
          type: "image",
          url: tenthCertificateImg,
          title: {
            en: "10th School Certificate",
            ja: "10年の証明書",
          },
          description: {
            en: "Secondary School Certificate — March 2014",
            ja: "中学証明書 — 2014年3月",
          },
        },
        {
          type: "image",
          url: tenthMarksheetImg,
          title: {
            en: "10th Marksheet",
            ja: "10年の成績",
          },
          description: {
            en: "84.60% with distinction",
            ja: "84.60%・優秀",
          },
        },
        {
          type: "image",
          url: twelfthMarksheetImg,
          title: {
            en: "12th Marksheet",
            ja: "12年の成績",
          },
          description: {
            en: "Science stream — February 2016 — 60.92%",
            ja: "理系 — 2016年2月 — 60.92%",
          },
        },
        {
          type: "image",
          url: footballState1Img,
          title: {
            en: "Football State Certificate 1",
            ja: "サッカー州証明書 1",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: footballState2Img,
          title: {
            en: "Football State Certificate 2",
            ja: "サッカー州証明書 2",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: footballState3Img,
          title: {
            en: "Football State Certificate 3",
            ja: "サッカー州証明書 3",
          },
          description: {
            en: "State football participation certificate",
            ja: "州のサッカー大会の証明書",
          },
        },
        {
          type: "image",
          url: runnerDistrictImg,
          title: {
            en: "District Runner Certificate",
            ja: "地区ランナー証明書",
          },
          description: {
            en: "District-level sports certificate",
            ja: "地区大会の証明書",
          },
        },
        {
          type: "image",
          url: paintingElementaryImg,
          title: {
            en: "Painting Elementary Certificate",
            ja: "絵の初級資格",
          },
          description: {
            en: "Elementary drawing certificate",
            ja: "絵の初級証明書",
          },
        },
        {
          type: "image",
          url: paintingIntermediateImg,
          title: {
            en: "Painting Intermediate Certificate",
            ja: "絵の中級資格",
          },
          description: {
            en: "Intermediate drawing certificate",
            ja: "絵の中級証明書",
          },
        },
      ],
    },

    assets: {
      label: "画像・資料",
      type: "assets",
      items: [],
    },
  },
},

},}];
