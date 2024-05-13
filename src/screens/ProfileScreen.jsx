import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const ProfileScreen = ({navigation}) => {
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          style={styles.backgroundImages}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/116625124?v=4',
          }}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../assets/images/back_arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containar}>
        <View style={styles.profileContainer}>
          <Animated.Image
            sharedTransitionTag="tag"
            style={styles.profileImages}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/116625124?v=4',
            }}
          />
          <Text style={styles.name}>Ajay I</Text>
          <Text style={styles.role}>Software Developer</Text>
          <Text style={styles.bio}>
            Crafting digital worlds one line of code at a time. Building
            tomorrow's tech with today's keystrokes. 🚀 #DeveloperLife
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Edit-Profile')}>
            <Image
              style={styles.actionIcon}
              source={require('../assets/images/edit_profile.png')}
            />
            <Text style={styles.actionsText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Image
              style={styles.actionIcon}
              source={require('../assets/images/share.png')}
            />
            <Text style={styles.actionsText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activity}>
          <TouchableOpacity
            style={[
              styles.activityBox,
              {
                borderRightWidth: 1,
              },
            ]}>
            <Text style={styles.count}>683</Text>
            <Text style={styles.title}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.activityBox,
              {
                borderRightWidth: 1,
              },
            ]}>
            <Text style={styles.count}>2.43k</Text>
            <Text style={styles.title}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityBox}>
            <Text style={styles.count}>122k</Text>
            <Text style={styles.title}>Likes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}> Activity</Text>
        </View>
        <View style={styles.actionsContainar}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/notification.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Notifications</Text>
                <Text style={styles.actionSubTitle}>
                  Posts,Videos,Comments,etc..
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/interaction.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Interactions</Text>
                <Text style={styles.actionSubTitle}>
                  Likes,comments,posts,etc...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/favorite.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Favorites</Text>
                <Text style={styles.actionSubTitle}>
                  your favorite items...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}> Settings</Text>
        </View>
        <View style={styles.actionsContainar}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/add_account.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Add Account</Text>
                <Text style={styles.actionSubTitle}>
                  Add new account,family members,etc..
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/language.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Languages</Text>
                <Text style={styles.actionSubTitle}>
                  Change application Language...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/shield.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Permissions</Text>
                <Text style={styles.actionSubTitle}>
                  Camera,location,storage,etc...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/data.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Secure Data</Text>
                <Text style={styles.actionSubTitle}>
                  store & secure data privacy...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}> Policy & Support</Text>
        </View>
        <View style={styles.actionsContainar}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/privay.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Privacy policy</Text>
                <Text style={styles.actionSubTitle}>
                  Check our privacy policy...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/conditions.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Terms & Conditions</Text>
                <Text style={styles.actionSubTitle}>
                  Check our terms & conditions...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/support.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Help</Text>
                <Text style={styles.actionSubTitle}>Contact our agent...</Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/invite.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Invite a friend</Text>
                <Text style={styles.actionSubTitle}>
                  Invite your friends...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/feedback.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Feedback</Text>
                <Text style={styles.actionSubTitle}>
                  Send your feedback,suggestions,etc...
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}> Handle Acoounts</Text>
        </View>
        <View style={styles.actionsContainar}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/chnage_account.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Change Account</Text>
                <Text style={styles.actionSubTitle}>
                  Login with another account
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/delete_account.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Delect Account</Text>
                <Text style={styles.actionSubTitle}>Delete your all datas</Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('Accounts')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.actionLeft}>
                <Image
                  style={styles.actionLeftIcon}
                  source={require('../assets/images/logout.png')}
                />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Logout</Text>
                <Text style={styles.actionSubTitle}>
                  Logout from this device
                </Text>
              </View>
            </View>
            <View style={styles.actionRight}>
              <Image
                style={styles.actionRightIcon}
                source={require('../assets/images/right_arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const ThemeStyles = theme =>
  StyleSheet.create({
    header: {
      height: 200,
      // backgroundColor:'red'
    },
    backgroundImages: {
      height: '100%',
      opacity: 0.5,
      objectFit: 'cover',
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 5,
    },
    backIcon: {
      height: 40,
      width: 40,
      tintColor: theme.primary,
    },
    containar: {
      backgroundColor: theme.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: -70,
      // height: screenHeight,
    },
    profileContainer: {
      alignItems: 'center',
      marginTop: -50,
    },
    profileImages: {
      height: 100,
      width: 100,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: theme.primary,
      padding: 2,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.primary,
    },
    role: {
      fontSize: 16,
      marginVertical: 3,
      color: theme.primary,
    },
    bio: {
      fontSize: 16,
      color: theme.primary,
      textAlign: 'center',
      padding: 5,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      marginVertical: 10,
    },
    actionIcon: {
      height: 25,
      width: 25,
      tintColor: theme.primary,
    },
    actionButton: {
      borderWidth: 0.2,
      borderColor: theme.primary,
      padding: 5,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    actionsText: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '500',
    },
    activity: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    activityBox: {
      alignItems: 'center',
      borderColor: theme.primary,
      paddingHorizontal: 30,
    },
    count: {
      fontSize: 16,
      fontWeight: '900',
      color: theme.primary,
    },
    title: {
      fontSize: 14,
      fontWeight: '400',
      color: theme.primary,
    },
    subHeader: {
      marginHorizontal: 10,
      marginTop: 15,
    },
    subHeaderTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.primary,
    },
    actionsContainar: {
      borderRadius: 2,
      borderWidth: 0.1,
      borderColor: theme.primary,
      margin: 7,
    },
    actionItem: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: theme.primary,
      // borderBottomWidth: 0.5,
    },
    actionLeft: {},
    actionLeftIcon: {
      height: 25,
      width: 25,
      tintColor: theme.primary,
    },
    actionContent: {
      marginHorizontal: 10,
    },
    actionTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.primary,
    },
    actionSubTitle: {
      fontSize: 15,
      fontWeight: '400',
      color: theme.primary,
    },
    actionRight: {},
    actionRightIcon: {
      height: 15,
      width: 15,
      tintColor: theme.primary,
    },
  });
