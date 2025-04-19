export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Admin: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      engineer_timesheets: {
        Row: {
          created_at: string
          date: string
          description: string
          engineer_id: string
          hours: number
          id: string
          project_id: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          engineer_id: string
          hours: number
          id?: string
          project_id: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          engineer_id?: string
          hours?: number
          id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "engineer_timesheets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      engineers: {
        Row: {
          active: boolean
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          address: string | null
          archived_date: string | null
          client_auth_created: boolean | null
          client_temp_password: string | null
          completion_date: string | null
          created_at: string
          email: string
          engineer_id: string | null
          first_name: string
          form_type: string
          id: string
          last_name: string
          message: string | null
          phone: string
          postcode: string | null
          project_reference: string | null
          secured: boolean | null
          service_type: string
          status: string
        }
        Insert: {
          address?: string | null
          archived_date?: string | null
          client_auth_created?: boolean | null
          client_temp_password?: string | null
          completion_date?: string | null
          created_at?: string
          email: string
          engineer_id?: string | null
          first_name: string
          form_type: string
          id?: string
          last_name: string
          message?: string | null
          phone: string
          postcode?: string | null
          project_reference?: string | null
          secured?: boolean | null
          service_type: string
          status?: string
        }
        Update: {
          address?: string | null
          archived_date?: string | null
          client_auth_created?: boolean | null
          client_temp_password?: string | null
          completion_date?: string | null
          created_at?: string
          email?: string
          engineer_id?: string | null
          first_name?: string
          form_type?: string
          id?: string
          last_name?: string
          message?: string | null
          phone?: string
          postcode?: string | null
          project_reference?: string | null
          secured?: boolean | null
          service_type?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_engineer_id_fkey"
            columns: ["engineer_id"]
            isOneToOne: false
            referencedRelation: "engineers"
            referencedColumns: ["id"]
          },
        ]
      }
      project_engineer_assignments: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          engineer_id: string | null
          id: string
          project_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          engineer_id?: string | null
          id?: string
          project_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          engineer_id?: string | null
          id?: string
          project_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_engineer_assignments_engineer_id_fkey"
            columns: ["engineer_id"]
            isOneToOne: false
            referencedRelation: "engineers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_engineer_assignments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      project_statuses: {
        Row: {
          created_at: string | null
          id: string
          last_updated_by: string | null
          notes: string | null
          project_id: string | null
          stage: string | null
          status: string
          updated_at: string | null
          visible_to_client: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_updated_by?: string | null
          notes?: string | null
          project_id?: string | null
          stage?: string | null
          status: string
          updated_at?: string | null
          visible_to_client?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_updated_by?: string | null
          notes?: string | null
          project_id?: string | null
          stage?: string | null
          status?: string
          updated_at?: string | null
          visible_to_client?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "project_statuses_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      project_whiteboards: {
        Row: {
          canvas_data: Json
          created_at: string | null
          id: string
          last_updated_by: string | null
          project_id: string | null
          updated_at: string | null
        }
        Insert: {
          canvas_data?: Json
          created_at?: string | null
          id?: string
          last_updated_by?: string | null
          project_id?: string | null
          updated_at?: string | null
        }
        Update: {
          canvas_data?: Json
          created_at?: string | null
          id?: string
          last_updated_by?: string | null
          project_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_whiteboards_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_project_reference: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_engineer_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          engineer_id: string
          engineer_name: string
          project_count: number
          secured_count: number
        }[]
      }
      get_status_counts: {
        Args: Record<PropertyKey, never>
        Returns: {
          status: string
          count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
