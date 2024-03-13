// necessary application imports
import { StyleSheet, Text, View, Image } from "react-native";

import {
  Directions,
  SpatialNavigation,
  SpatialNavigationVirtualizedGrid,
  SpatialNavigationRoot,
  SpatialNavigationNode,
  SpatialNavigationScrollView,
} from "react-tv-space-navigation";

import { NativeWindStyleSheet } from "nativewind";
import { useCallback, useState, useEffect } from "react";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const data = [
  {
    id: "1",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "2",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "3",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "4",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "5",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "6",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "7",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "8",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "9",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "10",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "11",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "12",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "13",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "14",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "15",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "16",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "17",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "18",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "19",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "20",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "21",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "22",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "23",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "24",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "25",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "26",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "27",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "28",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "29",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "30",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "31",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "32",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: "33",
    title: "Avengers: Endgame",
    year: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "34",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "35",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "36",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "37",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "38",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "39",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "40",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "41",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "42",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "43",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },

  {
    id: "44",
    title: "Avengers: Infinity War",
    year: "2018",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
  },
  {
    id: "45",
    title: "Avengers: Age of Ultron",
    year: "2015",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
];

export default function App() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const subscribeToRemoteControl = (callback) => {
    const handleKeyPress = configureRemoteControl();

    eventEmitter.on("keyDown", callback);

    return handleKeyPress;
  };

  const unsubscribeFromRemoteControl = (handleKeyPress) => {
    KeyEvent.removeEventListener(handleKeyPress);
  };

  SpatialNavigation.configureRemoteControl({
    remoteControlSubscriber: subscribeToRemoteControl,
    remoteControlUnsubscriber: unsubscribeFromRemoteControl,
  });

  SpatialNavigation.configureRemoteControl({
    remoteControlSubscriber: (callback) => {
      const mapping = {
        ArrowRight: Directions.RIGHT,
        ArrowLeft: Directions.LEFT,
        ArrowUp: Directions.UP,
        ArrowDown: Directions.DOWN,
        Enter: Directions.ENTER,
      };

      const eventId = window.addEventListener("keydown", (keyEvent) => {
        callback(mapping[keyEvent.code]);
      });

      return eventId;
    },

    remoteControlUnsubscriber: (eventId) => {
      window.removeEventListener("keydown", eventId);
    },
  });

  const onDirectionHandledWithoutMovement = useCallback(
    (movement) => {
      if (movement === "right") {
        toggleMenu(false);
      }
    },
    [toggleMenu]
  );

  const onDirectionHandledWithoutMovementGrid = useCallback(
    (movement) => {
      if (movement === "left") {
        toggleMenu(true);
      }
    },
    [toggleMenu]
  );

  const SideMenuElement = ({ onSelect }) => (
    <View
      className={`absolute z-10 left-0 h-full flex justify-center  bg-slate-900 ${
        isMenuOpen ? "w-24" : "w-6"
      }`}
    >
      <SpatialNavigationNode isFocusable onSelect={onSelect}>
        {({ isFocused }) => (
          <View
            className={` px-2 text-white py-4 ${isFocused ? "bg-white" : ""}`}
          >
            <Text>{isMenuOpen ? "Animations" : "A"}</Text>
          </View>
        )}
      </SpatialNavigationNode>

      <SpatialNavigationNode isFocusable onSelect={onSelect}>
        {({ isFocused }) => (
          <View
            className={` px-2 text-white py-4 ${isFocused ? "bg-white" : ""}`}
          >
            <Text>{isMenuOpen ? "Movies" : "M"}</Text>
          </View>
        )}
      </SpatialNavigationNode>
      <SpatialNavigationNode isFocusable onSelect={onSelect}>
        {({ isFocused }) => (
          <View
            className={` px-2 text-white py-4 ${isFocused ? "bg-white" : ""}`}
          >
            <Text>{isMenuOpen ? "BlockBusters" : "B"}</Text>
          </View>
        )}
      </SpatialNavigationNode>
    </View>
  );

  const renderItem = ({ item }) => {
    return <FocusableNode item={item} />;
  };

  const SideMenu = () => (
    <SpatialNavigationRoot
      onDirectionHandledWithoutMovement={onDirectionHandledWithoutMovement}
    >
      <SideMenuElement onSelect={() => toggleMenu(false)} />
    </SpatialNavigationRoot>
  );

  const FocusableNode = ({ item }) => (
    <SpatialNavigationNode isFocusable={true}>
      {({ isFocused }) => (
        <View
          className={`p-3 relative border-2 rounded-md w-[180px] h-[180px] flex flex-col justify-center items-center gap-4 ${
            isFocused ? "  border-white" : ""
          }`}
        >
          <View>
            <Image
              source={{ uri: item.imageUrl }}
              className="w-[150px] h-[100px] rounded-md"
            />
            <Text className={`text-white ${isFocused ? "font-bold" : ""} `}>
              {item.title}
            </Text>
            <Text
              className={`text-white  ${
                isFocused ? "scale-100 ease-in-out transition-all" : ""
              }`}
            >
              {item.year}
            </Text>
          </View>
        </View>
      )}
    </SpatialNavigationNode>
  );

  const Movies = () => (
    <View className=" ml-20">
      <Text className=" font-semibold text-xl text-slate-200">
        Welcome to my marvel movies App!
      </Text>
      <SpatialNavigationRoot
        onDirectionHandledWithoutMovement={
          onDirectionHandledWithoutMovementGrid
        }
      >
        <View className=" h-[700px] bg-[#333] p-10 rounded-lg overflow-hidden">
          <SpatialNavigationScrollView
            horizontal={true}
            style={{ padding: 20 }}
            offsetFromStart={10}
          >
            <SpatialNavigationVirtualizedGrid
              data={data}
              renderItem={renderItem}
              numberOfColumns={15}
              itemHeight={200}
              numberOfRenderedRows={7}
              numberOfRowsVisibleOnScreen={3}
              onEndReachedThresholdRowsNumber={2}
              rowContainerStyle={{ gap: 30 }}
              scrollBehavior="stick-to-end"
            />
          </SpatialNavigationScrollView>
        </View>
      </SpatialNavigationRoot>
    </View>
  );

  return (
    <View style={styles.container}>
      <SideMenu />
      <Movies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100vh",
    flex: 1,
    backgroundColor: "#333",
    gap: 10,
  },
});
