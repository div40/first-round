import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-[150vh]">
      <div className="items-center justify-center hidden pt-8 mr-2 lg:flex">
        <svg
          width="144"
          height="38"
          viewBox="0 0 144 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_780)">
            <path
              d="M1.12629 19.3431H10.5563C14.5953 19.3721 17.9203 21.6641 18.4293 25.5701H19.4413C19.9533 21.6451 23.3083 19.3411 27.3733 19.3411H36.2473V27.3411H30.0203V28.2121H36.6823C36.7979 28.2121 36.9088 28.1662 36.9906 28.0844C37.0723 28.0026 37.1183 27.8917 37.1183 27.7761V18.9021C37.1183 18.7865 37.0723 18.6756 36.9906 18.5938C36.9088 18.512 36.7979 18.4661 36.6823 18.4661H27.3723C23.3073 18.4661 19.9523 16.1661 19.4403 12.2361H18.4283C17.9163 16.1621 14.5613 18.4661 10.4963 18.4661H1.5673C1.6023 15.8721 1.65829 11.7861 1.67729 10.4661H7.85328V9.59412H1.31828C1.2971 9.59084 1.27571 9.58916 1.25428 9.58911C1.13328 9.58911 0.860285 9.63212 0.819285 10.0301C0.819285 10.0391 0.819285 10.0481 0.819285 10.0561C0.819285 10.0641 0.819285 10.0961 0.819285 10.1171L0.800273 11.4061C0.788273 12.2381 0.773281 13.3481 0.758281 14.4581L0.698283 18.8971C0.697494 18.9548 0.70814 19.0121 0.729594 19.0656C0.751048 19.1192 0.782886 19.1679 0.823283 19.2091C0.903683 19.2905 1.01197 19.3384 1.12629 19.3431Z"
              fill="#0A337A"
            />
            <path
              d="M12.0842 28.4062H25.7842V27.1582H12.0842V28.4062Z"
              fill="#0A337A"
            />
            <path
              d="M5.53323 37.4021H5.58523C6.84127 37.4126 8.05711 36.9597 9.00024 36.1301C9.53306 35.6602 9.95917 35.0817 10.25 34.4336C10.5408 33.7854 10.6895 33.0825 10.6862 32.3721V20.9281H9.43823V32.3721C9.44107 32.9187 9.32409 33.4593 9.09552 33.9558C8.86694 34.4524 8.53233 34.8928 8.11523 35.2461C7.41055 35.8405 6.51612 36.1627 5.59423 36.1541H5.53225C4.98564 36.1569 4.44502 36.0399 3.94848 35.8114C3.45195 35.5828 3.01153 35.2482 2.65823 34.8311C2.06378 34.1264 1.74164 33.232 1.75024 32.3101V32.2481C1.74164 31.3262 2.06378 30.4318 2.65823 29.7271C3.01158 29.31 3.45202 28.9755 3.94854 28.7469C4.44507 28.5183 4.98565 28.4013 5.53225 28.4041H8.03823V27.1581H5.53225C4.82184 27.1548 4.11893 27.3036 3.47076 27.5944C2.82259 27.8852 2.24412 28.3113 1.77423 28.8441C0.945205 29.7871 0.49272 31.0025 0.503231 32.2581V32.3011C0.49275 33.5571 0.945619 34.773 1.77523 35.7161C2.24509 36.249 2.82355 36.6751 3.47174 36.9659C4.11992 37.2567 4.82281 37.4054 5.53323 37.4021Z"
              fill="#0A337A"
            />
            <path
              d="M12.0852 10.6532H25.7852V9.40515H12.0852V10.6532Z"
              fill="#0A337A"
            />
            <path
              d="M10.6862 5.72513C10.7016 4.75741 11.0714 3.82893 11.7255 3.11554C12.3795 2.40215 13.2725 1.95336 14.2352 1.85413C14.7565 1.81854 15.2795 1.89034 15.7719 2.06509C16.2642 2.23984 16.7155 2.51382 17.0977 2.87006C17.4799 3.22629 17.7849 3.65719 17.9938 4.13608C18.2027 4.61497 18.3111 5.13164 18.3122 5.65411V8.00513H19.5562V5.65411C19.5562 4.31185 19.023 3.02459 18.0739 2.07547C17.1247 1.12635 15.8374 0.59314 14.4952 0.59314C13.1529 0.59314 11.8657 1.12635 10.9165 2.07547C9.96741 3.02459 9.4342 4.31185 9.4342 5.65411V16.8781H10.6822L10.6862 5.72513Z"
              fill="#0A337A"
            />
            <path
              d="M35.7452 1.98216C34.7848 1.08074 33.5134 0.58493 32.1963 0.598158C31.2779 0.592645 30.3765 0.846741 29.5963 1.33116C28.8635 1.78463 28.2586 2.41751 27.8386 3.16994C27.4187 3.92236 27.1976 4.76949 27.1963 5.63118V16.8902H28.4443V5.62816C28.4463 4.98022 28.6134 4.34348 28.9297 3.778C29.246 3.21252 29.7012 2.73695 30.2523 2.39616C30.8431 2.03057 31.5255 1.83989 32.2203 1.84617C33.2125 1.83553 34.1705 2.20846 34.8943 2.88716C35.4426 3.40804 35.8222 4.08136 35.9839 4.82014C36.1457 5.55893 36.0823 6.32926 35.8018 7.03163C35.5214 7.734 35.0368 8.33616 34.4106 8.76033C33.7845 9.1845 33.0455 9.41122 32.2892 9.41118H29.8403V10.6592H32.2892C33.295 10.6591 34.2776 10.3576 35.1102 9.79353C35.9429 9.22946 36.5873 8.42875 36.9603 7.49476C37.3333 6.56078 37.4178 5.53641 37.2028 4.55394C36.9878 3.57147 36.4833 2.67601 35.7543 1.98317L35.7452 1.98216Z"
              fill="#0A337A"
            />
            <path
              d="M27.1862 32.2111C27.1755 33.2016 26.7912 34.1514 26.1102 34.8706C25.4292 35.5899 24.5016 36.0254 23.5133 36.0901C23.001 36.1089 22.4903 36.0243 22.0116 35.8412C21.5328 35.6582 21.0958 35.3805 20.7268 35.0247C20.3578 34.669 20.0643 34.2425 19.8639 33.7708C19.6635 33.299 19.5602 32.7917 19.5603 32.2791V29.8041H18.3123V32.2791C18.3105 32.9439 18.4405 33.6024 18.6949 34.2166C18.9493 34.8307 19.3229 35.3883 19.7943 35.8571L19.8193 35.8821C20.764 36.8184 22.0411 37.3423 23.3712 37.3391H23.4433C24.7714 37.3153 26.0374 36.7724 26.9701 35.8266C27.9027 34.8808 28.428 33.6074 28.4332 32.2791V20.9321H27.1853L27.1862 32.2111Z"
              fill="#0A337A"
            />
            <path
              d="M60.3875 9.84454L55.6655 23.0635L50.9655 9.87457L47.3156 9.88654L53.9755 28.4545L57.3665 28.4435L64.0135 9.83557L60.3875 9.84454Z"
              fill="#0A337A"
            />
            <path
              d="M74.5895 14.3305V15.8305C74.0333 15.2417 73.362 14.7737 72.6173 14.4554C71.8726 14.1372 71.0704 13.9755 70.2605 13.9805C66.6875 13.9915 63.7965 16.9525 63.8105 21.2505C63.8235 25.4705 66.8875 28.4645 70.3835 28.4505C71.1783 28.4577 71.966 28.2991 72.6961 27.9847C73.4261 27.6703 74.0826 27.207 74.6235 26.6245V28.0745L78.0665 28.0635L78.0235 14.3165L74.5895 14.3305ZM70.9995 25.2935C70.4827 25.2851 69.9732 25.1709 69.5022 24.9582C69.0312 24.7455 68.6087 24.4387 68.2607 24.0566C67.9127 23.6745 67.6466 23.2253 67.4787 22.7365C67.3108 22.2477 67.2447 21.7297 67.2845 21.2145C67.2775 18.9625 68.6955 17.1455 70.9745 17.1375C72.0033 17.2115 72.9661 17.6715 73.6701 18.4254C74.374 19.1793 74.767 20.1715 74.7703 21.2029C74.7736 22.2344 74.3869 23.229 73.6878 23.9874C72.9887 24.7458 72.0288 25.212 71.0005 25.2925L70.9995 25.2935Z"
              fill="#0A337A"
            />
            <path
              d="M86.6956 19.7495L85.4246 19.1065C84.6726 18.7205 84.1796 18.4895 84.1786 17.9715C84.1786 17.4275 84.7195 17.1414 85.4185 17.1394C86.3495 17.2252 87.2084 17.6769 87.8065 18.3955L89.9225 16.2405C89.3981 15.5321 88.7137 14.9578 87.925 14.5643C87.1364 14.1709 86.2659 13.9695 85.3846 13.9765C84.8298 13.9359 84.2725 14.0075 83.7461 14.187C83.2196 14.3665 82.7347 14.6502 82.3202 15.0212C81.9057 15.3921 81.5702 15.8428 81.3337 16.3462C81.0972 16.8497 80.9645 17.3956 80.9435 17.9515C80.9485 19.6855 82.0666 21.0295 84.2706 22.1355L85.4376 22.7275C86.3976 23.2165 86.9675 23.6545 86.9695 24.2505C86.9695 24.8715 86.2996 25.3654 85.4456 25.3684C84.3121 25.2368 83.2769 24.6615 82.5666 23.7685L80.4506 26.1045C81.0072 26.8535 81.7362 27.4573 82.5757 27.8648C83.4153 28.2723 84.3407 28.4715 85.2736 28.4455C88.2736 28.4365 90.2126 26.5915 90.2056 24.1325C90.1986 22.0955 88.9776 20.9075 86.6956 19.7495Z"
              fill="#0A337A"
            />
            <path
              d="M95.9975 14.6957L92.5546 14.7065L92.5978 28.4545L96.0407 28.4437L95.9975 14.6957Z"
              fill="#0A337A"
            />
            <path
              d="M94.2455 8.59857C93.9635 8.5922 93.683 8.64147 93.42 8.74359C93.1571 8.84571 92.9169 8.99868 92.7131 9.19372C92.5093 9.38877 92.346 9.62203 92.2325 9.88025C92.1189 10.1385 92.0575 10.4165 92.0515 10.6985C92.0404 10.9995 92.0887 11.2997 92.1936 11.582C92.2986 11.8642 92.4582 12.1231 92.6633 12.3436C92.8684 12.5642 93.1148 12.7422 93.3887 12.8674C93.6626 12.9927 93.9585 13.0627 94.2594 13.0735C94.5485 13.0728 94.8346 13.015 95.1014 12.9036C95.3681 12.7922 95.6103 12.6293 95.8141 12.4243C96.0178 12.2192 96.1791 11.9759 96.2889 11.7085C96.3986 11.441 96.4545 11.1546 96.4535 10.8655C96.458 10.5715 96.4043 10.2796 96.2957 10.0063C96.187 9.73312 96.0255 9.48401 95.8203 9.27338C95.6152 9.06274 95.3705 8.89474 95.1002 8.77893C94.8299 8.66312 94.5395 8.60183 94.2455 8.59857Z"
              fill="#0A337A"
            />
            <path
              d="M105.008 14.6896L102.963 14.6956L102.947 9.62158L99.5035 9.63257L99.5195 14.7066L97.7595 14.7116L97.7686 17.6636L99.5286 17.6586L99.5626 28.4586L103.006 28.4476L102.972 17.6476L105.017 17.6406L105.008 14.6896Z"
              fill="#0A337A"
            />
            <path
              d="M115.518 14.3616L115.541 21.6886C115.548 24.0186 114.801 25.2886 112.963 25.2956C111.151 25.3016 110.37 24.0096 110.363 21.5496L110.341 14.3776L106.898 14.3885L106.917 20.6796C106.872 21.6485 106.918 22.6194 107.056 23.5796C107.61 26.7886 109.656 28.4646 112.974 28.4546C113.794 28.512 114.618 28.3846 115.383 28.082C116.148 27.7793 116.836 27.309 117.396 26.7056C118.841 25.0956 118.99 23.2316 118.982 20.6946L118.962 14.3516L115.518 14.3616Z"
              fill="#0A337A"
            />
            <path
              d="M142.446 15.8855C141.989 15.3634 141.421 14.9495 140.785 14.6738C140.148 14.3981 139.458 14.2675 138.765 14.2915C137.851 14.2816 136.95 14.5033 136.146 14.936C135.342 15.3686 134.66 15.998 134.165 16.7655C133.803 16.0123 133.231 15.3802 132.517 14.9459C131.803 14.5116 130.979 14.2936 130.144 14.3185C129.331 14.3225 128.528 14.4988 127.788 14.8358C127.048 15.1728 126.388 15.6628 125.852 16.2735V14.6945L122.409 14.7055L122.452 28.4525L125.895 28.4415L125.874 21.7105C125.865 18.8885 127.103 17.4865 128.812 17.4815C130.728 17.4755 131.251 19.1045 131.259 21.7715L131.28 28.4255L134.723 28.4145L134.701 21.6315C134.692 18.8095 135.93 17.4595 137.665 17.4535C139.218 17.4535 140.024 18.5595 140.032 20.8115L140.056 28.3975L143.499 28.3865L143.474 20.3345C143.464 18.5235 143.356 17.0225 142.446 15.8855Z"
              fill="#0A337A"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_780">
              <rect
                width="142.994"
                height="36.804"
                fill="white"
                transform="translate(0.503052 0.598022)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col gap-6 mt-16 lg:pl-6 md:pl-0">
        <span className="text-[#686868]/50 text-xs leading-[18px]">
          MAIN MENU
        </span>
        <div className="flex items-center justify-start gap-6 text-[#FF5151] cursor-pointer">
          <MdDashboard className="size-6 lg:ml-0" />
          <span className="hidden text-lg lg:block">Dashboard</span>
        </div>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <FaUserPlus className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Recruitment</span>
        </div>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <FaCalendarDay className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Schedule</span>
        </div>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <FaUsers className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Employee</span>
        </div>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <RiMovie2Fill className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Department</span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-16 -ml-8 md:pl-14">
        <span className="text-[#686868]/50 text-xs leading-[18px]">OTHER</span>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <BiSupport className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Support</span>
        </div>
        <div className="flex items-center justify-start gap-6 text-[#686868] cursor-pointer">
          <FaGear className="opacity-50 size-6 lg:ml-0 " />
          <span className="hidden text-lg lg:block">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
