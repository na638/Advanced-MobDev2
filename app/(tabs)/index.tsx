import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#121212", "#3a3a3a", "#000000"]} style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Image source={require("@/assets/images/Spotify_Primary_Logo_RGB_Green.png")} style={styles.logo} />

      <Text style={styles.title}>Spotify Login</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#9ca3af"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#9ca3af"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => alert("Forgot password pressed")} style={styles.forgotContainer}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/(tabs)/createProfile")}>
        <LinearGradient
          colors={["#0a7d2f", "#1DB954"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("@/assets/images/googgle.png")} style={styles.socialLogo} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("@/assets/images/facebook.png")} style={styles.socialLogo} />
        </TouchableOpacity>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/signup")}>
          <Text style={[styles.footerText, styles.signUp]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", alignItems: "center" },
  logo: { width: 90, height: 90, marginBottom: 24 },
  title: { color: "#fff", fontSize: 28, fontWeight: "700", marginBottom: 32 },
  input: { width: "100%", backgroundColor: "#161616", color: "#fff", padding: 14, borderRadius: 10, marginBottom: 12, fontSize: 16 },
  forgotContainer: { width: "100%", alignItems: "flex-end", marginBottom: 20 },
  forgotPassword: { color: "#c7d2d6", textDecorationLine: "underline" },
  signInButton: { paddingVertical: 14, paddingHorizontal: 48, borderRadius: 30, marginBottom: 16, alignItems: "center" },
  signInText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  orText: { color: "#c7d2d6", marginVertical: 12 },
  socialRow: { flexDirection: "row", justifyContent: "center", gap: 12, marginBottom: 24 },
  socialButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" },
  socialLogo: { width: 32, height: 32, resizeMode: "contain" },
  footerRow: { flexDirection: "row", marginTop: 12 },
  footerText: { color: "#c7d2d6", fontSize: 14 },
  signUp: { color: "#fff", fontWeight: "700", marginLeft: 6 },
});
