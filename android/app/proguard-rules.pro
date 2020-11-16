-dontobfuscate

-dontnote android.net.**
-dontnote org.apache.**

# An addition to RN's 'keep' and 'dontwarn' configs -- need to also 'dontnote' some stuff.

-dontnote com.facebook.**
-dontnote sun.misc.Unsafe
-dontnote okhttp3.**
-dontnote okio.**

# Do not strip any method/class that is annotated with @DoNotStrip
-keep @com.facebook.jni.annotations.DoNotStrip class *
-keep class * {
    @com.facebook.proguard.annotations.DoNotStrip *;
    @com.facebook.common.internal.DoNotStrip *;
    @com.facebook.jni.annotations.DoNotStrip *;
}
-keepclassmembers class * {
    @com.facebook.jni.annotations.DoNotStrip *;
}

-keep public class com.facebook.react.** {*;}

# Add any project specific keep options here:
-keep public class com.horcrux.svg.** {*;}

-keep class com.reime005.spaceseek.BuildConfig { *; }
