import  React from "react";
import {
FlatList,
ScrollView,
View,
StyleSheet,
Image,
Text,
Pressable,
TextInput,
} from "react-native";

function MyCourse() {

return (
  <View className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
    <View className="flex gap-5 px-5 py-3 w-full bg-white">
      <View
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d08efcb62a56a27d754727d836a650786ee04aaa3af69cec49e0f33c80a201?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
        className="shrink-0 aspect-[2.56] w-[54px]"
      />

      <View className="flex flex-1 gap-1 my-auto">
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f187120a4d30f89628245794a84b6c45090a0370f03132f113f76d3e5410ff76?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 w-5 aspect-[1.43]"
        />

        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a5690ade6b76d8253a87a57261f19a88fde2c1132a44b2005a559c6ea6a3300?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 w-4 aspect-[1.14]"
        />

        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e2cc7100037f776d86faa1d71ffcc3102329c9562723857a4c7a500c065a9b?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 aspect-[1.79] w-[25px]"
        />

      </View>
    </View>
    <View className="flex flex-col px-3.5 mt-5 w-full">
      <View className="flex gap-3 self-start text-2xl font-semibold text-center text-black">
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e19e28edcbb307ea8ea92d95a7c69a79ae78462c9453f09e7874077c8e62e093?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 self-start aspect-[1.12] fill-black w-[18px]"
        />
        <View>
          <Text>My Courses</Text>
        </View>
      </View>
      <View className="flex gap-5 items-start px-7 py-4 mt-10 rounded-xl border border-solid bg-slate-200 border-stone-300 text-stone-800">

        <View
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4421a80493dc89ecf6ebf0420b76be5e00e93349f35f4325057174b3198ad560?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 w-12 shadow-sm aspect-square"
        />
        <View className="flex flex-col">
          <View className="text-xs font-semibold text-black">
            <Text>Wireframing Fundamentals</Text>
          </View>
          <View className="mt-1.5 text-xs">
            <Text>By Shoaib Hassan</Text>
          </View>
          <View className="self-end text-xs font-medium">
            <Text>35% Done</Text>
          </View>
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/693795e5614e5dbc8cfd57c7896185dd3f27f997322eef1676fa2f6e4018cf5f?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
            className="mt-1.5 max-w-full border-violet-500 border-solid aspect-[25] border-[5px] stroke-[5px] stroke-violet-500 w-[126px]"
          />
        </View>
      </View>
      <View className="flex gap-5 justify-between px-6 py-4 mt-6 w-full rounded-xl border border-solid bg-slate-200 border-stone-300">
        <View className="flex gap-5">
          <View
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd3988081831efd15703cab5818f13c9d0c28709254b38d7544ccf3d48e02b?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
            className="shrink-0 w-12 shadow-sm aspect-square"
          />
          <View className="flex flex-col self-start">
            <View className="text-xs font-semibold text-black">
              <Text>UI UX Designing</Text>
            </View>
            <View className="mt-1.5 text-xs text-stone-800">
              <Text>By HM Waqar</Text>
            </View>

            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/693795e5614e5dbc8cfd57c7896185dd3f27f997322eef1676fa2f6e4018cf5f?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
              className="self-center mt-3 border-violet-500 border-solid aspect-[25] border-[5px] stroke-[5px] stroke-violet-500 w-[126px]"
            />
          </View>
        </View>
        <View className="my-auto text-xs font-medium text-stone-800">
          <Text>35% Done</Text>
        </View>
      </View>
      <View className="flex gap-5 items-start px-7 py-4 mt-6 rounded-xl border border-solid bg-slate-200 border-stone-300 text-stone-800">
        <View
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09f42124030a2583103a1b0fd53b4f9915a2f5c95e4b3666b89fcbefff55c453?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
          className="shrink-0 w-12 shadow-sm aspect-square"
        />
        <View className="flex flex-col">
          <View className="text-xs font-semibold text-black">
            <Text>Website Design</Text>
          </View>
          <View className="mt-1.5 text-xs">
            <Text>By Adnan Yousaf</Text>
          </View>
          <View className="self-end text-xs font-medium">
            <Text>35% Done</Text>
          </View>
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/693795e5614e5dbc8cfd57c7896185dd3f27f997322eef1676fa2f6e4018cf5f?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
            className="mt-1.5 max-w-full border-violet-500 border-solid aspect-[25] border-[5px] stroke-[5px] stroke-violet-500 w-[126px]"
          />
        </View>
      </View>
      <View className="flex gap-5 justify-between px-6 py-4 mt-6 w-full rounded-xl border border-solid bg-slate-200 border-stone-300">
        <View className="flex gap-5">
          <View
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c3813bf8df1641c7deb5d314bc315b2e63f64e5c5cee3309e1274647f080e3c?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
            className="shrink-0 w-12 shadow-sm aspect-square"
          />
          <View className="flex flex-col self-start">
            <View className="text-xs font-semibold text-black">
              <Text>Figma Basics</Text>
            </View>
            <View className="mt-1.5 text-xs text-stone-800">
              <Text>By Usman Diljan</Text>
            </View>
            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/693795e5614e5dbc8cfd57c7896185dd3f27f997322eef1676fa2f6e4018cf5f?apiKey=065bff9e66b44280a0e73bc2da065d4d&"
              className="self-center mt-3 border-violet-500 border-solid aspect-[25] border-[5px] stroke-[5px] stroke-violet-500 w-[126px]"
            />
          </View>
        </View>
        <View className="my-auto text-xs font-medium text-stone-800">
          <Text>35% Done</Text>
        </View>
      </View>
    </View>
    <View className="flex justify-center items-center px-16 pt-5 pb-1.5 mt-72 w-full bg-white">
      <View className="shrink-0 bg-black rounded-xl h-[5px] w-[139px]" />
    </View>
  </View>
);
}

export default MyCourse