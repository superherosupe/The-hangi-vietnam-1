/**
 * Noi dung 3 bai "Nen tang khoa hoc" o /hoat-chat - kien thuc chung ve hoat chat/cong nghe,
 * KHONG phai cong bo cong dung cua san pham cu the. Da duoc nguoi dung duyet truoc khi dang.
 */

export interface MucBaiViet {
  tieuDe: string;
  doanVan: string[];
}

export interface BaiViet {
  id: string;
  tieuDe: string;
  doanMoDau: string[];
  muc: MucBaiViet[];
  luuY: string;
}

export const baiVietVi: BaiViet[] = [
  {
    id: 'plla-la-gi',
    tieuDe: 'PLLA là gì?',
    doanMoDau: [
      'PLLA là tên viết tắt của Poly-L-Lactic Acid - một loại polymer tổng hợp có khả năng phân hủy sinh học (tự tiêu trong cơ thể theo thời gian). Đây không phải là một chất mới: PLLA đã được y học sử dụng từ nhiều thập kỷ, phổ biến nhất là trong chỉ khâu phẫu thuật tự tiêu và một số loại vật liệu cấy ghép y tế khác, nhờ đặc tính an toàn và khả năng phân hủy dần thành nước và CO2 mà cơ thể có thể đào thải tự nhiên.',
    ],
    muc: [
      {
        tieuDe: 'Về mặt cấu trúc',
        doanVan: [
          'PLLA thuộc nhóm polyester mạch thẳng, được tạo ra từ axit lactic - một hợp chất cũng xuất hiện tự nhiên trong quá trình chuyển hóa của cơ thể. Trong các sản phẩm thẩm mỹ - da liễu, PLLA thường được gia công thành các hạt vi cầu (microspheres) với kích thước đồng đều, để có thể được sử dụng theo đúng thiết kế và mục đích đã được nhà sản xuất công bố.',
        ],
      },
      {
        tieuDe: 'Vì sao PLLA được nhắc đến nhiều trong ngành thẩm mỹ - da liễu',
        doanVan: [
          'Theo y văn quốc tế, PLLA thuộc nhóm vật liệu sinh học (biomaterial) đã được nghiên cứu và ứng dụng trong nhiều lĩnh vực y tế trong thời gian dài, bao gồm cả các ứng dụng liên quan đến da. Đây là lý do PLLA xuất hiện phổ biến trong tài liệu chuyên môn và các hội thảo khoa học ngành da liễu - thẩm mỹ tại nhiều quốc gia, trong đó có Hàn Quốc.',
          'Tuy nhiên, cơ chế tác động cụ thể, liều lượng, và hiệu quả thực tế luôn phụ thuộc vào từng sản phẩm, công nghệ sản xuất, và hồ sơ công bố/lưu hành riêng của sản phẩm đó tại từng quốc gia - không phải một đặc tính chung có thể áp dụng cho mọi sản phẩm chứa PLLA.',
        ],
      },
    ],
    luuY:
      'Bài viết này chỉ nhằm mục đích cung cấp kiến thức nền tảng, khách quan về PLLA như một loại vật liệu sinh học đã được biết đến trong y khoa - không phải là công bố công dụng, không phải tư vấn điều trị, và không thay thế chỉ định của bác sĩ hoặc người hành nghề khám chữa bệnh. Với các sản phẩm cụ thể do The Hangi Việt Nam phân phối, thông tin công dụng chính xác (theo đúng hồ sơ công bố tại Việt Nam) được ghi tại trang chi tiết từng sản phẩm.',
  },
  {
    id: 'pdrn-va-pn',
    tieuDe: 'PDRN và PN khác nhau thế nào?',
    doanMoDau: [
      'PDRN và PN là hai cái tên thường được nhắc đến cùng nhau trong ngành thẩm mỹ - da liễu, khiến nhiều người nhầm lẫn đây là một chất. Trên thực tế, cả hai đều thuộc nhóm polynucleotide (chuỗi các nucleotide - đơn vị cấu tạo nên DNA), nhưng khác nhau ở đặc điểm cấu trúc phân tử.',
    ],
    muc: [
      {
        tieuDe: 'PDRN là gì?',
        doanVan: [
          'PDRN (Polydeoxyribonucleotide) là một hỗn hợp các chuỗi DNA có nguồn gốc sinh học, thường được chiết xuất và tinh chế theo quy trình nghiêm ngặt. Đây là hoạt chất đã được nghiên cứu và ứng dụng trong y học từ khá lâu, ban đầu được biết đến nhiều trong lĩnh vực hỗ trợ phục hồi mô.',
        ],
      },
      {
        tieuDe: 'PN là gì?',
        doanVan: [
          'PN (Polynucleotide) là tên gọi chung hơn cho nhóm chuỗi nucleotide, cũng có nguồn gốc từ DNA. Về bản chất, PN có thể xem là một dạng liên quan gần với PDRN, nhưng khác nhau về kích thước chuỗi phân tử (độ dài mạch DNA) và quy trình tinh chế, dẫn tới đặc tính vật lý khác nhau giữa các sản phẩm sử dụng PDRN so với PN.',
        ],
      },
      {
        tieuDe: 'Vì sao hay bị nhầm lẫn',
        doanVan: [
          'Vì cùng thuộc nhóm polynucleotide và cùng xuất hiện phổ biến trong các sản phẩm skinbooster, PDRN và PN thường bị gộp chung khi nhắc tới trên mạng xã hội hoặc các bài viết không chuyên. Trong tài liệu khoa học và hồ sơ kỹ thuật, hai hoạt chất này được phân biệt rõ ràng về mặt cấu trúc phân tử, và mỗi sản phẩm thương mại sẽ công bố cụ thể loại nào (PDRN hay PN) được sử dụng, với thành phần và hàm lượng riêng.',
        ],
      },
    ],
    luuY:
      'Bài viết này chỉ nhằm mục đích cung cấp kiến thức nền tảng, khách quan để phân biệt hai khái niệm PDRN và PN thường gặp trong ngành - không phải là công bố công dụng, không phải tư vấn điều trị, và không thay thế chỉ định của bác sĩ hoặc người hành nghề khám chữa bệnh. Với các sản phẩm cụ thể do The Hangi Việt Nam phân phối, thông tin thành phần và công dụng chính xác (theo đúng hồ sơ công bố tại Việt Nam) được ghi tại trang chi tiết từng sản phẩm.',
  },
  {
    id: 'cong-nghe-incube',
    tieuDe: 'Công nghệ đóng gói hoạt chất INCUBE',
    doanMoDau: [
      'Một trong những thách thức lớn khi sản xuất các sản phẩm thẩm mỹ - da liễu chứa hoạt chất sinh học là giữ cho các hoạt chất này không bị mất hoạt tính trong suốt quá trình sản xuất, vận chuyển và lưu trữ. Vitamin C và Glutathione là hai ví dụ điển hình - đây là các hoạt chất vốn rất dễ bị oxy hóa (biến chất) khi tiếp xúc với không khí, ánh sáng hoặc nhiệt độ không phù hợp.',
    ],
    muc: [
      {
        tieuDe: 'Vật liệu xốp (MOF) là gì?',
        doanVan: [
          'Để giải quyết vấn đề trên, LABINCUBE - nhà sản xuất Hàn Quốc - ứng dụng nền tảng công nghệ mang tên INCUBE™, dựa trên khoa học vật liệu xốp có tên MOF (Metal-Organic Framework - khung hữu cơ kim loại). Đây là một hướng nghiên cứu vật liệu được ứng dụng trong nhiều ngành công nghiệp (không riêng mỹ phẩm), với đặc điểm là cấu trúc có rất nhiều khoang xốp li ti ở cấp độ phân tử, có khả năng "giữ" các phân tử khác bên trong.',
        ],
      },
      {
        tieuDe: 'Nguyên lý áp dụng trong sản phẩm',
        doanVan: [
          'Theo cách LABINCUBE mô tả trong tài liệu kỹ thuật, cấu trúc xốp này được dùng để bao bọc và bảo vệ các thành phần chức năng dễ mất hoạt tính (như Vitamin C, Glutathione) trong suốt quá trình sản xuất, phân phối và lưu trữ sản phẩm, trước khi được hoàn nguyên (pha với nước) để sử dụng. Đây cũng là lý do các sản phẩm ứng dụng công nghệ này thường ở dạng bột hoặc dạng đông khô, cần pha chế trước khi dùng, thay vì dạng dung dịch pha sẵn.',
        ],
      },
      {
        tieuDe: 'Vì sao điều này quan trọng',
        doanVan: [
          'Một hoạt chất dù có đặc tính tốt trên lý thuyết, nhưng nếu bị mất hoạt tính trước khi tới tay người dùng cuối, thì thành phần ghi trên nhãn và thực tế sản phẩm khi sử dụng có thể chênh lệch. Công nghệ đóng gói như INCUBE™ là hướng tiếp cận kỹ thuật nhằm giảm thiểu rủi ro này trong suốt chuỗi cung ứng - từ nhà máy tại Hàn Quốc đến khi sản phẩm được sử dụng tại Việt Nam.',
        ],
      },
    ],
    luuY:
      'Bài viết này chỉ nhằm mục đích cung cấp kiến thức nền tảng, khách quan về nguyên lý công nghệ đóng gói hoạt chất - không phải là công bố công dụng, không phải tư vấn điều trị, và không thay thế chỉ định của bác sĩ hoặc người hành nghề khám chữa bệnh. Với các sản phẩm cụ thể do The Hangi Việt Nam phân phối, thông tin công nghệ và thành phần chính xác được ghi tại trang chi tiết từng sản phẩm, theo đúng tài liệu do nhà sản xuất LABINCUBE cung cấp.',
  },
];

export const baiVietEn: BaiViet[] = [
  {
    id: 'plla-la-gi',
    tieuDe: 'What is PLLA?',
    doanMoDau: [
      "PLLA stands for Poly-L-Lactic Acid - a synthetic, biodegradable polymer (it breaks down naturally in the body over time). It is not a new substance: PLLA has been used in medicine for decades, most commonly in absorbable surgical sutures and other implantable medical materials, thanks to its safety profile and its ability to gradually break down into water and CO2 that the body can eliminate naturally.",
    ],
    muc: [
      {
        tieuDe: 'Structurally speaking',
        doanVan: [
          "PLLA belongs to the linear polyester family, produced from lactic acid - a compound that also occurs naturally in the body's metabolism. In aesthetic-dermatology products, PLLA is typically processed into microspheres of uniform size, so it can be used according to the manufacturer's declared design and intended purpose.",
        ],
      },
      {
        tieuDe: 'Why PLLA comes up so often in aesthetic dermatology',
        doanVan: [
          'According to international medical literature, PLLA belongs to a class of biomaterials that has been researched and applied across many areas of medicine for a long time, including skin-related applications. This is why PLLA appears frequently in professional literature and scientific conferences in dermatology and aesthetic medicine across many countries, including Korea.',
          'That said, the specific mechanism of action, dosage, and real-world effect always depend on the individual product, its manufacturing technology, and its own regulatory filing in each country - not a single characteristic that applies uniformly to every product containing PLLA.',
        ],
      },
    ],
    luuY:
      'This article is intended only to provide general, objective background knowledge about PLLA as a biomaterial known in medicine - it is not a declaration of efficacy, not medical advice, and does not replace the judgment of a licensed medical practitioner. For specific products distributed by The Hangi Vietnam, accurate efficacy information (per the official Vietnamese regulatory filing) is listed on each product\'s detail page.',
  },
  {
    id: 'pdrn-va-pn',
    tieuDe: 'How are PDRN and PN different?',
    doanMoDau: [
      'PDRN and PN are two names often mentioned together in aesthetic dermatology, which leads many people to assume they are the same substance. In fact, both belong to the polynucleotide family (chains of nucleotides - the building blocks of DNA), but differ in their molecular structure.',
    ],
    muc: [
      {
        tieuDe: 'What is PDRN?',
        doanVan: [
          'PDRN (Polydeoxyribonucleotide) is a mixture of DNA-derived chains, typically extracted and purified through a strict process. It is an ingredient that has been researched and applied in medicine for quite some time, initially known mainly in the field of tissue-repair support.',
        ],
      },
      {
        tieuDe: 'What is PN?',
        doanVan: [
          'PN (Polynucleotide) is a broader name for the nucleotide-chain family, also derived from DNA. In essence, PN can be seen as a closely related form to PDRN, but differs in molecular chain size (DNA strand length) and purification process, which results in different physical properties between products using PDRN versus PN.',
        ],
      },
      {
        tieuDe: 'Why the confusion happens',
        doanVan: [
          'Because they both belong to the polynucleotide family and both appear widely in skinbooster products, PDRN and PN are often lumped together in social media posts or non-specialist articles. In scientific literature and technical documentation, the two ingredients are clearly distinguished by molecular structure, and each commercial product will specifically declare which one (PDRN or PN) it uses, along with its own composition and concentration.',
        ],
      },
    ],
    luuY:
      'This article is intended only to provide general, objective background knowledge distinguishing the commonly confused terms PDRN and PN - it is not a declaration of efficacy, not medical advice, and does not replace the judgment of a licensed medical practitioner. For specific products distributed by The Hangi Vietnam, accurate composition and efficacy information (per the official Vietnamese regulatory filing) is listed on each product\'s detail page.',
  },
  {
    id: 'cong-nghe-incube',
    tieuDe: 'INCUBE ingredient-encapsulation technology',
    doanMoDau: [
      'One of the major challenges in manufacturing aesthetic-dermatology products containing biological ingredients is keeping those ingredients from losing potency throughout manufacturing, distribution and storage. Vitamin C and Glutathione are two classic examples - both are ingredients that oxidize (degrade) easily when exposed to air, light, or unsuitable temperatures.',
    ],
    muc: [
      {
        tieuDe: 'What is a porous material (MOF)?',
        doanVan: [
          'To address this, LABINCUBE - the Korean manufacturer - applies a technology platform called INCUBE™, based on the science of porous materials known as MOF (Metal-Organic Framework). This is a materials-research direction applied across many industries (not just cosmetics), characterized by a structure with a very high density of molecular-scale pores capable of "holding" other molecules inside.',
        ],
      },
      {
        tieuDe: 'How it is applied in products',
        doanVan: [
          "As described in LABINCUBE's technical documentation, this porous structure is used to encapsulate and protect functional ingredients prone to losing potency (such as Vitamin C and Glutathione) throughout manufacturing, distribution and storage, before being reconstituted (mixed with water) for use. This is also why products using this technology are typically in powder or freeze-dried form, requiring preparation before use, rather than a ready-mixed solution.",
        ],
      },
      {
        tieuDe: 'Why this matters',
        doanVan: [
          'An ingredient may have promising properties on paper, but if it loses potency before reaching the end user, what is stated on the label and what is actually in the product at the point of use can diverge. Encapsulation technology such as INCUBE™ is a technical approach aimed at reducing that risk throughout the supply chain - from the factory in Korea to the point of use in Vietnam.',
        ],
      },
    ],
    luuY:
      "This article is intended only to provide general, objective background knowledge about the principle behind ingredient-encapsulation technology - it is not a declaration of efficacy, not medical advice, and does not replace the judgment of a licensed medical practitioner. For specific products distributed by The Hangi Vietnam, accurate technology and composition information is listed on each product's detail page, per the documentation provided by manufacturer LABINCUBE.",
  },
];
